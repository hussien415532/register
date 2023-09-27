import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';




@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, NavComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
