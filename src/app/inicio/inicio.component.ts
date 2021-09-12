import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
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
  descricaoTema: string

  key = 'data'
  reverse = true

  constructor(
    private authService: AuthService,
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      this.alertas.showAlertDanger('Sua sessão expirou, faça o login novamente.')
      this.router.navigate(['/entrar'])
    }
    this.getAllTemaInicio()
    this.getAllPostagens()
    console.log(environment.id)
  }
  getAllTemaInicio() {
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }
  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) =>{
      this.tema = resp
    })
  }

  findByIdUsuario(){
    this.authService.buscarPorId(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp   
    })
  }

  findByTituloPostagem(){
    if(this.tituloPost == ''){
      this.getAllPostagens()
    } else {
      this.postagemService.getByNomePostagem(this.tituloPost).subscribe((resp: Postagem[]) => {
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema(){
    if(this.descricaoTema == ''){
      this.getAllTemaInicio()
    } else {
      this.temaService.getByNomeTema(this.descricaoTema).subscribe((resp: Tema[]) => {
        this.listaTemas = resp
      })
    }
  }

  
  publicar() {
 
    this.tema.id = this.idTema
    this.postagem.postagemTema = this.tema

   console.log(this.postagem.postagemTema.nomeTema)
    
    this.usuario.id_usuario = this.idUsuario
    this.postagem.postagemUsuario = this.usuario

    this.postagemService.novaPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }
}
