import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component'
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component'
import { LoginBuyerComponent } from 'src/app/components/login-buyer/login-buyer.component'
import { loginGuard } from 'src/app/guards/login/login.guard';
import { shouldBeLoggedGuard } from 'src/app/guards/should-be-logged/should-be-logged.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'register', component: RegisterUserComponent, canActivate:[loginGuard] },
    { path: 'login', component: LoginBuyerComponent, canActivate:[loginGuard] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
