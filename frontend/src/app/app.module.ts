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
import { MenubarComponent } from 'src/app/menubar/menubar.component';
import { FooterComponent } from './footer/footer.component';

//Home Components
import { HomeComponent } from './home/home.component';
import { HomeSalesComponent } from './home/home-sales/home-sales.component';
import { HomeProductsComponent } from './home/home-products/home-products.component';
import { HomeBrandsComponent } from './home/home-brands/home-brands.component';

//User Components
import { RegisterUserComponent } from './register-user/register-user.component';
import { RegisterUserAddressComponent } from './register-user/register-user-address/register-user-address.component';
import { RegisterUserMainInfoComponent } from './register-user/register-user-main-info/register-user-main-info.component';

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
        RegisterUserMainInfoComponent

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
