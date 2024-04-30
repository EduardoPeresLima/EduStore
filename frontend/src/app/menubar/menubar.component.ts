import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
  menuItems : MenuItem[] = [
    {
      label: 'Sales',
      icon: 'pi pi-fw pi-gift'
    },
    {
      label: 'Categories',
      icon: 'pi pi-fw pi-palette'
    },
    {
      label: 'Brands',
      icon: 'pi pi-fw pi-shopping-bag'
    }
  ]
  inputProduct: string | undefined
  onSearchButtonClicked(){
    // console.log(this.inputProduct)
    this.inputProduct = "";
  }
}
