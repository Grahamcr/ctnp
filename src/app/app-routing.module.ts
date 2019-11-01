import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path: 'about', component: AboutComponent},
                        {path: 'home', component: HomeComponent},
                        {path: 'ctnp', component: HomeComponent},
                        {path: '', component: HomeComponent, pathMatch: 'full'}];

// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
