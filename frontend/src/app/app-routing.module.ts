import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component'
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component'

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterUserComponent
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
