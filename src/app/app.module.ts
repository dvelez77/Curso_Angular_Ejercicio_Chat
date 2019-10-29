import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SalaComponent } from './sala/sala.component';

import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { ListasalasComponent } from './listasalas/listasalas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalaComponent,
    ChatComponent,
    ListasalasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
