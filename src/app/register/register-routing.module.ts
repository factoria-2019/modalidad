import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { IdSemilleroComponent } from './id-semillero/id-semillero.component';
import { IdEstCoorComponent } from './id-est-coor/id-est-coor.component';
import { IdEstComponent } from './id-est/id-est.component';
import { IdProyectoComponent } from './id-proyecto/id-proyecto.component';
import { IdProfTutorComponent } from './id-prof-tutor/id-prof-tutor.component';

const routes: Routes = [
    {
        path: 'register', component: RegisterComponent, children: [
            { path: '01', component: IdSemilleroComponent },
            { path: '02', component: IdProfTutorComponent },
            { path: '03', component: IdEstCoorComponent },
            { path: '04', component: IdEstComponent },
            { path: '05', component: IdProyectoComponent }
        ]
    },

];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegisterRoutingModule { }