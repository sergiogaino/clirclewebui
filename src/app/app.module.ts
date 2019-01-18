import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// External inports
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatGridListModule} from '@angular/material';

// Base Components
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
// Page Components
import { HomeComponent } from './pages/home/home.component';
import { ResultComponent } from './pages/result/result.component';
import { DetailComponent } from './pages/detail/detail.component';
// Modules Components
import { SearchComponent } from './modules/search/search.component';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { HeroComponent } from './modules/hero/hero.component';
import { ProductComponent } from './modules/product/product.component';
import { LoadComponent } from './pages/load/load.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResultComponent,
    DetailComponent,
    SearchComponent,
    CarouselComponent,
    HeroComponent,
    ProductComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
