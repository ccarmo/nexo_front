import { Component, OnInit } from '@angular/core';
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
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  buscarPorId(){
    this.authService.buscarPorId(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
