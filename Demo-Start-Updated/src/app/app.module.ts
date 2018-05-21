import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { CustomerComponent } from './customers/template-driven/customer.component';
import { CustomerComponent } from './customers/customer.component';

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
