import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sair()
  }

  sair(){
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

}
