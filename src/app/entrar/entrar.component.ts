import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioDTO } from '../model/UsuarioDTO';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {


  usuarioDTO: UsuarioDTO = new UsuarioDTO();

  constructor(
    private auth: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

   entrar(){
     this.auth.entrar(this.usuarioDTO).subscribe((resp: UsuarioDTO)=>{
       this.usuarioDTO   = resp;
       environment.nome  = this.usuarioDTO.nome
       environment.foto  = this.usuarioDTO.foto
       environment.email = this.usuarioDTO.email
       environment.token = this.usuarioDTO.token
       environment.id    = this.usuarioDTO.id;
       this.router.navigate(['/inicio'])
     }, erro => {
       if(erro.status == 400){
         this.alertas.showAlertDanger('Usuário ou senha estão incorretos!')
       }  
    })
   }

   sair(){
     this.router.navigate(['/entrar'])
     environment.token = ''
     environment.nome = ''
     environment.foto = ''
     environment.id = 0
   }

}
