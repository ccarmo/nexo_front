import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

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

  constructor(
    private authService: AuthService,
    private router: Router
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
