import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';

const routes: Routes = [
  {
    path: '', 
    component: UsersComponent
  },
  {
    path: 'user:id', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class UsersRoutingModule { }
