import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usercandidato-edit',
  templateUrl: './usercandidato-edit.component.html',
  styleUrls: ['./usercandidato-edit.component.css']
})
export class UsercandidatoEditComponent implements OnInit {

  

  usuario: Usuario = new Usuario()
  idUser: number
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdUser(id)
  }

  atualizar() {
    this.usuario.tipo = 'CANDIDATO'

    if (this.usuario.senha != this.confirmarSenha) {
      this.alertas.showAlertDanger('A senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/inicio'])
        this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente.')
        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0

        this.router.navigate(['/entrar'])
      })
    }
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  findByIdUser(id: number) {
    this.authService.buscarPorId(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}
