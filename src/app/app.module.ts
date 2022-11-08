import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageUserHomeComponent } from './components/pages/page-user-home/page-user-home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageHomeFormComponent } from './components/pages/page-home/page-home-form/page-home-form.component';
import { PageHomeRegisterFormComponent } from './components/pages/page-home/page-home-register-form/page-home-register-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageUserHomeComponent,
    HeaderComponent,
    FooterComponent,
    PageHomeFormComponent,
    PageHomeRegisterFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
