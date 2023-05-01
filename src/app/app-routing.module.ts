import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: ':es/home', component: HomeComponent},
  {path: ':es/menu', component: MenuComponent},
  {path: ':es/about', component: AboutComponent},

  {path: ':en/home', component: HomeComponent},
  {path: ':en/menu', component: MenuComponent},
  {path: ':en/about', component: AboutComponent},

  {path: ':cat/home', component: HomeComponent},
  {path: ':cat/menu', component: MenuComponent},
  {path: ':cat/about', component: AboutComponent},

  {path: '**', pathMatch:'full', redirectTo:'es/home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
