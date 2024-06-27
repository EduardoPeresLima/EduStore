import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { UserData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
    selector: 'app-menubar',
    templateUrl: './menubar.component.html',
    styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent {
    menuItems: MenuItem[] = [
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
    userLogged = false;
    userData : UserData
    inputProduct: string | undefined
    constructor(
        private route: Router,
        private authService: AuthService
    ) {
        this.userData = {}
    }
    ngOnInit(): void {
        this.route.events.subscribe((val: any) => {
            if(localStorage.getItem('user')){
                this.userLogged = true
                this.userData = this.authService.getUserData()
            }
            else{
                this.userLogged = false
                this.userData = {}
            }
        })
    }

    onSearchButtonClicked() {
        // console.log(this.inputProduct)
        this.inputProduct = "";
    }

    logout(){
        this.authService.clearStorage();
    }
}
