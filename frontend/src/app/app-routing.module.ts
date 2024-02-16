import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterBuyerComponent } from './register-buyer/register-buyer.component'

const routes: Routes = [
    { path: 'register-buyer', component: RegisterBuyerComponent},
    // { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
