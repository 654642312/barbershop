import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
  },
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'insights', 
    loadChildren: () => import('./insights/insights.module').then(m => m.InsightsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'counting', 
    loadChildren: () => import('./counting/counting.module').then(m => m.CountingModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'services', 
    loadChildren: () => import('./services/services.module').then(m => m.ServicesModule),
    canActivate: [AuthGuardService]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [AuthGuardService],
  exports: [RouterModule]
})
export class MainRoutingModule { }
