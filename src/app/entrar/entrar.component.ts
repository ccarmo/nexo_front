import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../model/UsuarioDTO';
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
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

   entrar(){
     this.auth.entrar(this.usuarioDTO).subscribe((resp: UsuarioDTO)=>{
       this.usuarioDTO = resp;
       this.router.navigate(['/inicio'])
    })
   }

}
