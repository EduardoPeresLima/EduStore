import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { InputMaskModule } from 'primeng/inputmask';
import { CarouselModule } from 'primeng/carousel'
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CarouselModule,
    CalendarModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    CarouselModule,
    CalendarModule
  ]
})
export class PrimengModule { }
