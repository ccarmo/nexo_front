import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: Usuario = new Usuario();
  idUsuario = environment.id;
  nome = environment.nome;
  foto = environment.foto;
  email = environment.email;
  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  tituloPost: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  constructor(
    private authService: AuthService,
    private router: Router, 
    private postagemService: PostagemService,
    private temaService: TemaService
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua seção expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
      
    }
  }

  buscarPorId(){
    this.authService.buscarPorId(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
