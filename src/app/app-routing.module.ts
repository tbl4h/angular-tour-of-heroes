import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { SomeNewComponentComponent } from './some-new-component/some-new-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'someNewComponentPath', component: SomeNewComponentComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },

];

@NgModule({
  // The following line adds the RouterModule to the 
  // AppRoutingModule imports array and configures it with the routes in one step by 
  // calling RouterModule.forRoot():
  // 
  imports: [RouterModule.forRoot(routes)],
  // Export RouterModule to be available throughout the app
  // Without that export RouterModule was be visible only in thtat particular module
  exports: [RouterModule]
})
export class AppRoutingModule { }