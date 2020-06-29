import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

// componenetes rutas
import { UsuarioComponent } from './component/usuario/usuario.component';
import { EditUsuarioComponent } from './component/edit-usuario/edit-usuario.component';
import { NewUsuarioComponent } from './component/new-usuario/new-usuario.component';
// -- categorias --
import { InsumoComponent } from './component/categorias/insumo/insumo.component';
import { NewInsumoComponent } from './component/categorias/new-insumo/new-insumo.component';
import { EditInsumoComponent } from './component/categorias/edit-insumo/edit-insumo.component';
import { TiendaComponent } from './component/categorias/tienda/tienda.component';
import { TiendaEditComponent } from './component/categorias/tienda-edit/tienda-edit.component';
import { TiendaNewComponent } from './component/categorias/tienda-new/tienda-new.component';
import { EntFinanComponent } from './component/categorias/ent-finan/ent-finan.component';
import { EntFinanEditComponent} from './component/categorias/ent-finan-edit/ent-finan-edit.component';
import { EntFinanNewComponent } from './component/categorias/ent-finan-new/ent-finan-new.component';

// -- servicios --
import { ServFinanComponent } from './component/serv-finan/serv-finan/serv-finan.component';
import { ServFinanNewComponent } from './component/serv-finan/serv-finan-new/serv-finan-new.component';
import { ServFinanEditComponent } from './component/serv-finan/serv-finan-edit/serv-finan-edit.component';


// array de rutas
const appRutes:Routes=[
    {path:'usuario',component:UsuarioComponent},
    {path:'usuario-edit/:id',component:EditUsuarioComponent},
    {path:'usuario-new',component:NewUsuarioComponent},
// -- categorias --
    {path:'cate-insumo',component:InsumoComponent},
    {path:'cate-insumo-new',component:NewInsumoComponent},
    {path:'cate-insumo-edit/:id',component:EditInsumoComponent},
    {path:'cate-tienda',component:TiendaComponent},
    {path:'cate-tienda-new',component:TiendaNewComponent},
    {path:'cate-tienda-edit/:id',component:TiendaEditComponent},
    {path:'cate-ent-Finan',component:EntFinanComponent},
    {path:'cate-ent-Finan-new',component:EntFinanNewComponent},
    {path:'cate-ent-Finan-edit/:id',component:EntFinanEditComponent},

// -- servicios --
    {path:'serv-finan',component:ServFinanComponent},
    {path:'serv-finan-new',component:ServFinanNewComponent},
    {path:'serv-finan-edit/:id',component:ServFinanEditComponent}
    
]


export const appRutingProvider:any[]=[];
export const Ruting:ModuleWithProviders=RouterModule.forRoot(appRutes);

