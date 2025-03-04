//Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Guards
import { loginGuard } from 'src/app/guards/login/login.guard';
import { shouldBeLoggedGuard } from 'src/app/guards/should-be-logged/should-be-logged.guard';

//Router Components
import { HomeComponent } from 'src/app/components/home/home.component'
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component'
import { LoginBuyerComponent } from 'src/app/components/login-buyer/login-buyer.component'
import { BuyerAccountComponent } from 'src/app/components/buyer-account/buyer-account.component'
import { BuyerAccountMainComponent } from './components/buyer-account/buyer-account-main/buyer-account-main.component';
import { BuyerAccountDataComponent } from './components/buyer-account/buyer-account-data/buyer-account-data.component';
import { BuyerAccountOrdersComponent } from './components/buyer-account/buyer-account-orders/buyer-account-orders.component';
import { BuyerAccountWalletComponent } from './components/buyer-account/buyer-account-wallet/buyer-account-wallet.component';
import { ProductComponent } from './components/product/product.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'EduStore' },
    { path: 'product/:id', component: ProductComponent, title: 'Product' },
    { path: 'register', component: RegisterUserComponent, canActivate: [loginGuard], title: 'Register User' },
    { path: 'login', component: LoginBuyerComponent, canActivate: [loginGuard], title: 'Login' },
    {
        path: 'account', component: BuyerAccountComponent, canActivate: [shouldBeLoggedGuard],
        children: [
            { path: '', component: BuyerAccountMainComponent, title: 'My Account'},
            { path: 'data', component: BuyerAccountDataComponent, title: 'Data'},
            { path: 'orders', component: BuyerAccountOrdersComponent, title: 'Orders'},
            { path: 'wallet', component: BuyerAccountWalletComponent, title: 'Wallet'}
        ]
    },
    { path: 'not-found', component: NotFoundComponent, title: 'Page Not Found' },
    { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
