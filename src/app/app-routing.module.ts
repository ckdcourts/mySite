import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
 { path : '', component: HomeComponent},
 { path: 'home' , component: HomeComponent},
 { path : 'about', component: AboutComponent},
 { path : 'services', component: ServicesComponent},
 { path : '**', component: AppComponent},
 // { path : '', redirectTo: "/home", pathMatch:'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
