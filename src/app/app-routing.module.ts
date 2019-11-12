import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';


const routes: Routes = [{path: 'about', component: AboutComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'ctnp', redirectTo: '', pathMatch: 'full'},
                        {path: 'shop', component: ShopComponent},
                        {path: '', component: HomeComponent, pathMatch: 'full'}];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
