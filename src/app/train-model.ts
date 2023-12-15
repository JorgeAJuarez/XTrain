
export interface TrainModel {

}

export interface Technic {
    Level: string;
    Type: string;
    Name: string;
    Explanation: string;
    Sample: String;
}

export interface Train {
    Technics: Technic[]
}

export interface Alumn {
    Id: number;
    Name: String;
    Trains: Train[];
    Level: String;
}

export interface Teacher {
    Alumns: Alumn[];
    Name: String;
    Description: String;
    Photo: String;
    Permissions: Permission[];
}

export interface Permission {
    Name: String;
}

export interface School {
    Name: String;
    Teachers: Teacher[];
    Description: String;
}
