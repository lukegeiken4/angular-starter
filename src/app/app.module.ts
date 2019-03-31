import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.cmpt';
import { HeaderComponent } from './header/header.cmpt';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
