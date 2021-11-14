import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cv', loadChildren: () => import('./cv/cv.module').then(c => c.CvModule)},
  {path: '**', redirectTo: 'cv'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
