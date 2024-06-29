import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-account-sidebar',
  templateUrl: './buyer-account-sidebar.component.html',
  styleUrls: ['./buyer-account-sidebar.component.scss']
})
export class BuyerAccountSidebarComponent {
    constructor(private router: Router){}
    goToSubRoute(subroute: string){
        this.router.navigate([`/account/${subroute}`])
    }
}
