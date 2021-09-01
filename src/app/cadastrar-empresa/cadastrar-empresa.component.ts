import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-cadastrar-empresa',
  templateUrl: './cadastrar-empresa.component.html',
  styleUrls: ['./cadastrar-empresa.component.css']
})
export class CadastrarEmpresaComponent implements OnInit {
  
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
  this.usuario.tipo = "EMPRESA";

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