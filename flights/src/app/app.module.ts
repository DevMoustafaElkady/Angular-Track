import { SharedModule } from './Modules/shared/shared.module';
import { HomeModule } from './Modules/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [AppComponent, ContactUsComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
