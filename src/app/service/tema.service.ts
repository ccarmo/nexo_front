import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ngModuleJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://projetonexogen.herokuapp.com/tema', this.token)
  }

  getByIdTema(id: number): Observable<Tema>{
    return this.http.get<Tema>(`https://projetonexogen.herokuapp.com/tema/id/${id}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://projetonexogen.herokuapp.com/tema/novotema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
  return this.http.put<Tema>('https://projetonexogen.herokuapp.com/tema/alterartema', tema, this.token)
  }
  deleteTema(id: number){
  return this.http.delete(`https://projetonexogen.herokuapp.com/tema/id/${id}`, this.token)
  }

  getByNomeTema(nomeTema: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://projetonexogen.herokuapp.com/tema/nome/${nomeTema}`, this.token)

  }
}
