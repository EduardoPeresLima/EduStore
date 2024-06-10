import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { CarouselModule } from 'primeng/carousel'


@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CarouselModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    CarouselModule
  ]
})
export class PrimengModule { }
