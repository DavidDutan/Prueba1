import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { persona } from './domain/persona';
import { PersonaComponent } from './listar/persona/persona.component';

const routes: Routes = [
  {path: '', component: PersonaComponent},
  {path: "persona/list", component: PersonaComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

