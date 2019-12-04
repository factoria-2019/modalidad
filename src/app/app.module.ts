import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';





import { AppRoutingModule } from './app-routing.module';
import {RegisterModule} from './register/register.module'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
