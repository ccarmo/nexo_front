import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { CadastrarCandidatoComponent } from './cadastrar-candidato/cadastrar-candidato.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { TimedevComponent } from './timedev/timedev.component';
import { TemaComponent } from './tema/tema.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { MenuComponent } from './menu/menu.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { UserempresaEditComponent } from './edit/userempresa-edit/userempresa-edit.component';
import { UsercandidatoEditComponent } from './edit/usercandidato-edit/usercandidato-edit.component';


const routes: Routes = [

    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'menu', component: MenuComponent},
    {path:'entrar', component: EntrarComponent},
    {path:'home', component: HomeComponent},
    {path:'inicio', component: InicioComponent},
    {path:'timedev', component: TimedevComponent},
    {path:'cadastrar-empresa', component: CadastrarEmpresaComponent},
    {path:'cadastrar-candidato', component: CadastrarCandidatoComponent},
    {path:'tema', component: TemaComponent},
    {path:'tema-edit/:id', component: TemaEditComponent},
    {path:'tema-delete/:id', component: TemaDeleteComponent},
    {path:'postagem-edit/:id', component: PostagemEditComponent},
    {path:'postagem-delete/:id', component: PostagemDeleteComponent},
    {path:'userempresa-edit/:id', component: UserempresaEditComponent},
    {path:'usercandidato-edit/:id', component: UsercandidatoEditComponent},
    {path:'sobrenos', component: SobrenosComponent}



  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }