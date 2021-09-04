import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarCandidatoComponent } from './cadastrar-candidato/cadastrar-candidato.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [

    {path: '', redirectTo: 'entrar', pathMatch: 'full'},
    {path:'entrar', component: EntrarComponent},
    {path:'cadastrar-empresa', component: CadastrarEmpresaComponent},
    {path:'cadastrar-candidato', component: CadastrarCandidatoComponent},
    {path:'inicio', component: InicioComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
