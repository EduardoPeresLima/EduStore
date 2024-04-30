import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar'
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'


@NgModule({
  declarations: [],
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimengModule { }
