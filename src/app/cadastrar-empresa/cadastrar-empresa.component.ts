import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {

  constructor(
    
    private router: Router
) { }



ngOnInit() {
  window.scroll(0,0);
}