import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
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
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { UtilidadesComponent } from './utilidades/utilidades.component';
import { TestemunhosComponent } from './testemunhos/testemunhos.component';
import { AlertasComponent } from './alertas/alertas.component';
import { UsercandidatoEditComponent } from './edit/usercandidato-edit/usercandidato-edit.component';
import { UserempresaEditComponent } from './edit/userempresa-edit/userempresa-edit.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';

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
    TemaEditComponent,
    TemaDeleteComponent,
    PostagemEditComponent,
    PostagemDeleteComponent,
    UtilidadesComponent,
    TestemunhosComponent,
    AlertasComponent,
    UsercandidatoEditComponent,
    UserempresaEditComponent,
    MenuInicioComponent,


  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
