import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioDTO } from '../model/UsuarioDTO';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar (usuarioDTO: UsuarioDTO): Observable<UsuarioDTO> {
    return this.http.post<UsuarioDTO>('https://projetonexogen.herokuapp.com/usuario/entrar', usuarioDTO);
  }
    
  cadastrar (usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://projetonexogen.herokuapp.com/usuario/cadastrar', usuario)
  }

}
