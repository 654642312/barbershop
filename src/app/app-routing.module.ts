import { MainComponent } from './pods/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pods/auth/auth.component';

const routes: Routes = [
  {
    path: 'dashboard', 
    component: MainComponent,
    loadChildren: () => import('./pods/main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'auth', 
    component: AuthComponent,
    loadChildren: () => import('./pods/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
