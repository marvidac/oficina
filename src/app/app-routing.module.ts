import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'servico', component: ServicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
