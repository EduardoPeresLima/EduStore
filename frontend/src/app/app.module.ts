//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Routing Modules
import { AppRoutingModule } from './app-routing.module';

//My Modules
import { PrimengModule } from 'src/app/primeng/primeng.module'

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
    RegisterUserComponent

    //---- Components
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimengModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
