//Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

//Routing Modules
import { AppRoutingModule } from './app-routing.module';

//My Modules
import { PrimengModule } from 'src/app/primeng/primeng.module'

//My Components
import { AppComponent } from 'src/app/app.component';
import { MenubarComponent } from 'src/app/menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent
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
