import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/Usuario';
@Component({
  selector: 'app-cadastrar-candidato',
  templateUrl: './cadastrar-candidato.component.html',
  styleUrls: ['./cadastrar-candidato.component.css']
})
export class CadastrarCandidatoComponent implements OnInit {

  confirmarSenha: string;
  usuario: Usuario = new Usuario;
  constructor(
    private authService: AuthService,
    private router: Router
) { }



ngOnInit() {
  window.scroll(0,0);
}
confirmSenha (event: any) {
  this.confirmarSenha = event.target.value;
}
cadastrar(){
  this.usuario.tipo = "CANDIDATO";

  if(this.usuario.senha != this.confirmarSenha){
    alert('As senhas estão incorretas.')
  } else {
    this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
      this.router.navigate(['/entrar'])
      alert('Usuário cadastrado com sucesso!')
    })
  }
}
}
