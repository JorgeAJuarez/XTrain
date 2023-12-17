export interface Technic {
    level: string;
    type: string;
    name: string;
    explanation: string;
    sample: String;
}

export interface Train {
    name: String;
    descripcion: String;
    technics: Technic[]
}

export interface Alumn {
    id: number;
    name: String;
    teacher: String;
    trains: Train[];
    level: String;
}

export interface Teacher {
    id: number;
    alumns: Alumn[];
    name: String;
    description: String;
    photo: String;
    permissions: Permission[];
}

export interface Permission {
    name: String;
}

export interface School {
    id: number;
    name: String;
    teachers: Teacher[];
    description: String;
    location: String;
}

export interface Academia {
    schools: School[];
    notices: Notice[];
    events: Event[];
    blog: BlogEntry;
}

export interface Notice {
    id: number;
    title: String;
    date: String;
    author: String;
    body: String;
}

export interface Event {
    id: number;
    title: String;
    date: String;
    author: String;
    body: String;
}

export interface BlogEntry {
    id: number;
    title: String;
    date: String;
    author: String;
    body: String;
}
