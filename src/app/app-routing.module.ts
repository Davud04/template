import { NgModule } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';


const appRoutes: Routes = [
  { path: 'link', component: NavbarComponent },
  { path: '', component: BannerComponent },
  { path: 'aboutus', component: AboutUsComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
