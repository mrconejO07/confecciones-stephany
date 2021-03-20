import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { PeruComponent } from './productos/peru/peru.component';
import { ColombiaComponent } from './productos/colombia/colombia.component';
import { NacionalComponent } from './productos/nacional/nacional.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { VariosComponent } from './productos/varios/varios.component';
import { MallasColComponent } from './productos/mallas-col/mallas-col.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    PeruComponent,
    ColombiaComponent,
    NacionalComponent,
    VariosComponent,
    MallasColComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SlickCarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
