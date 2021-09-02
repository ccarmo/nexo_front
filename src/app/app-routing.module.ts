import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarCandidatoComponent } from './cadastrar-candidato/cadastrar-candidato.component';

const routes: Routes = [

    {path: '', redirectTo: 'entrar', pathMatch: 'full'},
    {path:'entrar', component: EntrarComponent},
    {path:'cadastrar-empresa', component: CadastrarEmpresaComponent},
    {path:'cadastrar-candidato', component: CadastrarCandidatoComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }