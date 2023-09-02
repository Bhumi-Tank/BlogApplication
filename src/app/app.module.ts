import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ArticlesComponent } from './Components/articles/articles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDatepicker, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ArticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDatepicker,
    NgbDropdown
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
