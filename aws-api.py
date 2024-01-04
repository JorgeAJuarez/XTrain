#Only as Reference
import json
import boto3
import hashlib
import jwt
import os

DYNAMODB_TABLE = 'Dojo'
S3_BUCKET = 'hwarangdo-video'
SECRET_KEY = '5ECFE96B6F2F9BA1E3158A357FC21'

def lambda_handler(event, context):
    if (('httpMethod' in event and event['httpMethod']=='OPTIONS')):
        print("OPTIONS-IF")
        return makeResponse({});
    if (not "action" in event):
        if (event["isBase64Encoded"]):
            event["body"]=base64.b64decode(event["body"]).decode('ascii')
        event=json.loads(event["body"])
    action_mapping = {
        'insert_user': insert_user,
        'validate_user': validate_user,
        'process_object': process_object,
        'save_to_s3': save_to_s3,
        'generate_presigned_url': generate_presigned_url,
        'generate_presigned_post': generate_presigned_post,
        'get_item':get_item
    }
    action = event.get('action')
    return action_mapping.get(action, invalid_action)(event, context)

def invalid_action(event, context):
    return {
        'statusCode': 400,
        'body': 'Invalid action'
    }

def insert_user(event, context):
    username = event['username']
    password = event['password']
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    user_id = f"{username}+{password_hash}"
    object_data = {'ID':user_id, 'SEARCH':username, 'privileges':['insert','get','view','upload']}
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(DYNAMODB_TABLE)
    table.put_item(Item=object_data)
    return error_response("Invalid credentials")

def validate_user(event, context):
    username = event['username']
    password = event['password']
    password_hash = hashlib.sha256(password.encode()).hexdigest()
    user_id = f"{username}+{password_hash}"
    response = get_dynamodb_item(user_id, username)
    if 'Item' in response:
        user_data = response['Item']
        token = jwt.encode({'privileges': user_data['privileges']}, SECRET_KEY, algorithm='HS256')
        return success_response(token)
    else:
        return error_response("Invalid credentials")
        
def get_item(event, context):
    if not validate_token(event['token']):
        return error_response("Invalid token")
    id = event['id']
    search = event['search']
    response = get_dynamodb_item(id, search)
    return success_response(response)

def get_dynamodb_item(id, search):
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(DYNAMODB_TABLE)
    return table.get_item(Key={'ID': id, 'SEARCH':search})

def process_object(event, context):
    if not validate_token(event['token']):
        return error_response("Invalid token")
    object_data = event['object_data']
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table(DYNAMODB_TABLE)
    table.put_item(Item=object_data)
    return success_response("Object processed")

def validate_token(token):
    try:
        privilege = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        return privilege
    except jwt.InvalidTokenError:
        return null

def save_to_s3(event, context):
    if not validate_token(event['token']):
        return error_response("Invalid token")
    s3 = boto3.client('s3')
    file_name = event['file_name']
    file_content = event['file_content']
    s3.put_object(Bucket=S3_BUCKET, Key=file_name, Body=file_content)
    return success_response("Saved to S3")

def generate_presigned_url(event, context):
    if not validate_token(event['token']):
        return error_response("Invalid token")
    s3 = boto3.client('s3')
    object_name = event['object_name']
    presigned_url = s3.generate_presigned_url('get_object',
                                              Params={'Bucket': S3_BUCKET, 'Key': object_name},
                                              ExpiresIn=3600)
    return success_response(presigned_url)

def generate_presigned_post(event, context):
    if not validate_token(event['token']):
        return error_response("Invalid token")

    s3 = boto3.client('s3')
    object_name = event['object_name']
    expiration = 3600
    presigned_post = s3.generate_presigned_post(Bucket=S3_BUCKET,
                                                Key=object_name,
                                                ExpiresIn=expiration)
    return success_response(presigned_post)

def success_response(body):
    return {'statusCode': 200, "headers": {
            
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, x-requested-with"
        },'body': json.dumps(body, ensure_ascii=False)}

def error_response(message):
    return {'statusCode': 400, "headers": {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, x-requested-with"
        }, 'body': json.dumps(message, ensure_ascii=False)}
    
    
def makeResponse(response):
    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, x-requested-with"
        },
        "body": json.dumps(response, ensure_ascii=False)
    }
    
def makeResponseError(response):
    return {
        "statusCode": 500,
        "headers": {
            "Access-Control-Allow-Origin" : "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, x-requested-with"
        },
        "body": json.dumps(response, ensure_ascii=False)
    }
