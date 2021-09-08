import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioDTO } from '../model/UsuarioDTO';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  entrar (usuarioDTO: UsuarioDTO): Observable<UsuarioDTO> {
    console.log(usuarioDTO)
    return this.http.put<UsuarioDTO>('http://localhost:8080/usuario/entrar', usuarioDTO);
    
  }
    
  cadastrar (usuario: Usuario): Observable<Usuario>{
    console.log(usuario)
    return this.http.post<Usuario>('http://localhost:8080/usuario/cadastrar', usuario);
    
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `http://localhost:8080/usuario/${id}`,this.token
    );
  }

}
