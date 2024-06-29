import { Component } from '@angular/core';
import { UserData } from 'src/app/interfaces/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-buyer-account',
  templateUrl: './buyer-account.component.html',
  styleUrls: ['./buyer-account.component.scss']
})
export class BuyerAccountComponent {
    userData: UserData
    lastOrders = [1,1,1]
    constructor(private authService: AuthService){
        this.userData = this.authService.getUserData()
    }

}
