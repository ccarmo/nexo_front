import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarCandidatoComponent } from './cadastrar-candidato/cadastrar-candidato.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { TimedevComponent } from './timedev/timedev.component';

const routes: Routes = [

    {path: '', redirectTo: 'cadastrar-candidato', pathMatch: 'full'},
    {path:'entrar', component: EntrarComponent},
    {path:'home', component: HomeComponent},
    {path:'inicio', component: InicioComponent},
    {path:'timedev', component: TimedevComponent},
    {path:'cadastrar-empresa', component: CadastrarEmpresaComponent},
    {path:'cadastrar-candidato', component: CadastrarCandidatoComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }