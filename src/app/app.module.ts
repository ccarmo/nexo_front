import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CadastrarCandidatoComponent } from './cadastrar-candidato/cadastrar-candidato.component';
import { CadastrarEmpresaComponent } from './cadastrar-empresa/cadastrar-empresa.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { TimedevComponent } from './timedev/timedev.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemComponent } from './postagem/postagem.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    HomeComponent,
    MenuComponent,
    RodapeComponent,
    SobrenosComponent,
    CadastrarEmpresaComponent,
    CadastrarCandidatoComponent,
    TimedevComponent,
    InicioComponent,
    TemaComponent,
    PostagemComponent,
    TemaEditComponent,
    TemaDeleteComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
