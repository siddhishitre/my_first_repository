import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AddcircleComponent } from './addcircle/addcircle.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
console.log('app module.........');


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    AddcircleComponent,
    TestComponent,
    Test2Component
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
