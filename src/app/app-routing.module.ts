import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: 'auth', loadChildren: () => import('./auth/auth.module').then(c => c.AuthModule)},
  {path: '', loadChildren: () => import('./cv/cv.module').then(c => c.CvModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
