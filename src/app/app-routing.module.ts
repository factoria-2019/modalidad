import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';




import { IdSemilleroComponent } from './register/id-semillero/id-semillero.component';
import { IdEstCoorComponent } from './register/id-est-coor/id-est-coor.component';
import { IdEstComponent } from './register/id-est/id-est.component';
import { IdProyectoComponent } from './register/id-proyecto/id-proyecto.component';
import { IdProfTutorComponent } from './register/id-prof-tutor/id-prof-tutor.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', redirectTo: 'register/01', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
