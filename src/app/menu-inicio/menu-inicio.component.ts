import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-menu-inicio',
  templateUrl: './menu-inicio.component.html',
  styleUrls: ['./menu-inicio.component.css']
})
export class MenuInicioComponent implements OnInit {

  constructor(
    private alertas: AlertasService
  ) { }

  ngOnInit() {
  }

  sair(){
    this.alertas.showAlertSuccess('Efetuado logoff do usuário. Até mais!')
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}
