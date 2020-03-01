import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FilterlnPipe} from './filterln.pipe';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

const appRoutes: Routes = [
];
@NgModule({
  declarations: [
    AppComponent,
    FilterlnPipe 
  ],
imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpClientJsonpModule
],
  bootstrap: [AppComponent]
})
export class AppModule { }

 