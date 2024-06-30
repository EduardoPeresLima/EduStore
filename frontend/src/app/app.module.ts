//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Routing Modules
import { AppRoutingModule } from './app-routing.module';

//My Modules
import { PrimengModule } from 'src/app/modules/primeng.module'

//======================== My Components ==========================
//Base Components
import { AppComponent } from 'src/app/app.component';
import { MenubarComponent } from 'src/app/components/menubar/menubar.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

//Home Components
import { HomeComponent } from 'src/app/components/home/home.component';
import { HomeSalesComponent } from 'src/app/components/home/home-sales/home-sales.component';
import { HomeProductsComponent } from 'src/app/components/home/home-products/home-products.component';
import { HomeBrandsComponent } from 'src/app/components/home/home-brands/home-brands.component';

//User Components
import { RegisterUserComponent } from 'src/app/components/register-user/register-user.component';
import { RegisterUserAddressComponent } from 'src/app/components/register-user/register-user-address/register-user-address.component';
import { RegisterUserMainInfoComponent } from 'src/app/components/register-user/register-user-main-info/register-user-main-info.component';
import { LoginBuyerComponent } from 'src/app/components/login-buyer/login-buyer.component';
import { BuyerAccountComponent } from './components/buyer-account/buyer-account.component';
import { BuyerAccountSidebarComponent } from './components/buyer-account/buyer-account-sidebar/buyer-account-sidebar.component';
import { BuyerAccountMainComponent } from './components/buyer-account/buyer-account-main/buyer-account-main.component';
import { BuyerAccountDataComponent } from './components/buyer-account/buyer-account-data/buyer-account-data.component';
import { BuyerAccountOrdersComponent } from './components/buyer-account/buyer-account-orders/buyer-account-orders.component';
import { BuyerAccountWalletComponent } from './components/buyer-account/buyer-account-wallet/buyer-account-wallet.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
    declarations: [
        AppComponent,
        MenubarComponent,
        FooterComponent,

        //Home Components
        HomeComponent,
        HomeSalesComponent,
        HomeProductsComponent,
        HomeBrandsComponent,

        //User Components
        RegisterUserComponent,
        RegisterUserAddressComponent,
        RegisterUserMainInfoComponent,
        LoginBuyerComponent,
        BuyerAccountComponent,
        BuyerAccountSidebarComponent,
        BuyerAccountMainComponent,
        BuyerAccountDataComponent,
        BuyerAccountOrdersComponent,
        BuyerAccountWalletComponent,
        ProductComponent

        //---- Components
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,

        PrimengModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
