import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './components/pages/page-home/page-home.component';
import { PageUserHomeComponent } from './components/pages/page-user-home/page-user-home.component';

const routes: Routes = [
  {
    path:'',
    component: PageHomeComponent
  },
  {
    path:'userhome',
    component: PageUserHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
