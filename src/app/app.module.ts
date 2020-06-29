import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRutingProvider,Ruting } from './app.ruting';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { EditUsuarioComponent } from './component/edit-usuario/edit-usuario.component';
import { NewUsuarioComponent } from './component/new-usuario/new-usuario.component';
import { InsumoComponent } from './component/categorias/insumo/insumo.component';
import { TiendaComponent } from './component/categorias/tienda/tienda.component';
import { EntFinanComponent } from './component/categorias/ent-finan/ent-finan.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { NewInsumoComponent } from './component/categorias/new-insumo/new-insumo.component';
import { EditInsumoComponent } from './component/categorias/edit-insumo/edit-insumo.component';
import { TiendaNewComponent } from './component/categorias/tienda-new/tienda-new.component';
import { TiendaEditComponent } from './component/categorias/tienda-edit/tienda-edit.component';
import { EntFinanNewComponent } from './component/categorias/ent-finan-new/ent-finan-new.component';
import { EntFinanEditComponent } from './component/categorias/ent-finan-edit/ent-finan-edit.component';
import { ServFinanComponent } from './component/serv-finan/serv-finan/serv-finan.component';
import { ServFinanNewComponent } from './component/serv-finan/serv-finan-new/serv-finan-new.component';
import { ServFinanEditComponent } from './component/serv-finan/serv-finan-edit/serv-finan-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EditUsuarioComponent,
    NewUsuarioComponent,
    InsumoComponent,
    TiendaComponent,
    EntFinanComponent,
    NewInsumoComponent,
    EditInsumoComponent,
    TiendaNewComponent,
    TiendaEditComponent,
    EntFinanNewComponent,
    EntFinanEditComponent,
    ServFinanComponent,
    ServFinanNewComponent,
    ServFinanEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ruting,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [appRutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
