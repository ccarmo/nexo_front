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
  
  nome = environment.nome
  foto = environment.nome
  
  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  entrar (usuarioDTO: UsuarioDTO): Observable<UsuarioDTO> {
    
    return this.http.put<UsuarioDTO>('https://projetonexogen.herokuapp.com/usuario/entrar', usuarioDTO);
    
  }
    
  cadastrar (usuario: Usuario): Observable<Usuario>{
    console.log(usuario)
    return this.http.post<Usuario>('https://projetonexogen.herokuapp.com/usuario/cadastrar', usuario);
    
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(
      `https://projetonexogen.herokuapp.com/usuario/${id}`,this.token
    );
  }

}
