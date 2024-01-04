import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AwsApiService {

  private apiUrl = ' https://ut872ely07.execute-api.us-east-1.amazonaws.com/default/hwarangdoweb-api'; // Reemplaza con tu URL de AWS Lambda

  constructor(private http: HttpClient) { }

  performAction(action: string, data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const token = localStorage.getItem('userToken');
    const payload = { 'token': token, 'action': action, ...data };
    return this.http.post(this.apiUrl, payload, { headers });
  }

}
