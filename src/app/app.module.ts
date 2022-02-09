import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BrowseComponent,
    PageNotFoundComponent,
    LoginComponent,
    SearchComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
    AppRoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [BrowseComponent]
})
export class AppModule { }
