import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RegisterRoutingModule } from './register-routing.module'

import { RegisterComponent } from './register.component'
import { IdSemilleroComponent } from './id-semillero/id-semillero.component';
import { IdEstCoorComponent } from './id-est-coor/id-est-coor.component';
import { IdEstComponent } from './id-est/id-est.component';
import { IdProyectoComponent } from './id-proyecto/id-proyecto.component';
import { IdProfTutorComponent } from './id-prof-tutor/id-prof-tutor.component';



@NgModule({
  declarations: [RegisterComponent, IdSemilleroComponent, IdEstCoorComponent, IdEstComponent, IdProyectoComponent, IdProfTutorComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule

  ]
})
export class RegisterModule { }
