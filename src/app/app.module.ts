import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { InformationBarComponent } from './information-bar/information-bar.component';
import { RedirectModalComponent } from './redirect-modal/redirect-modal.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobileMenuComponent,
    InformationBarComponent,
    RedirectModalComponent,
    AboutComponent,
    HomeComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
