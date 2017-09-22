import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginService } from './email/login.service';
import {LoggerService} from './global-services/logger.service';
import { InMemoryDataService } from './mock-data/in-memory-data.service'

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [LoginService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
