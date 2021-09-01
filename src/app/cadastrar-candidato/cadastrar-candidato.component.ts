import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastrar-candidato',
  templateUrl: './cadastrar-candidato.component.html',
  styleUrls: ['./cadastrar-candidato.component.css']
})
export class CadastrarCandidatoComponent implements OnInit {

 
  constructor(
    
    private router: Router
) { }



ngOnInit() {
  window.scroll(0,0);
}

}
