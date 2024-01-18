import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './vistas/formulario/formulario.component';
import { TablaComponent } from './vistas/tabla/tabla.component';
import { DragComponent } from './vistas/drag/drag.component';
import { BienvenidaComponent } from './vistas/bienvenida/bienvenida.component';
import { MenuPrincipalComponent } from './vistas/menu-principal/menu-principal.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegistroComponent } from './vistas/registro/registro.component';

const routes: Routes = [{path:"formulario",component:FormularioComponent},
{path:"tabla",component:TablaComponent},
{path:"drag-drop",component:DragComponent},
{path:"menu",component:MenuPrincipalComponent},
{path:"bienvenida",component:BienvenidaComponent},
{path:"registro",component:RegistroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
