import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button'
import { CalendarModule } from 'primeng/calendar';
import { CarouselModule } from 'primeng/carousel'
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext'
import { MessageService } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'
import { ToastModule } from 'primeng/toast';


@NgModule({
    declarations: [],
    imports: [
        ButtonModule,
        CalendarModule,
        CarouselModule,
        InputMaskModule,
        InputTextModule,
        MenubarModule,
        ToastModule
    ],
    exports: [
        ButtonModule,
        CalendarModule,
        CarouselModule,
        InputMaskModule,
        InputTextModule,
        MenubarModule,
        ToastModule
    ],
    providers: [
      MessageService,
    ]
})
export class PrimengModule { }
