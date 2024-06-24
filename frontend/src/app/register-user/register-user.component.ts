import { Component } from '@angular/core';
import { BuyerService } from '../services/buyer/buyer.service';
import { BuyerCreate } from 'src/app/interfaces/buyer';
import { AddressCreateWithBuyer } from 'src/app/interfaces/address';
import { AuthService } from '../services/auth/auth.service';

enum RegisterStep {
    UserMainData,
    UserAddress
}

@Component({
    selector: 'app-register-user',
    templateUrl: './register-user.component.html',
    styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
    RegisterStep = RegisterStep;

    userData : any = {};
    
    // registerStep: RegisterStep = RegisterStep.UserAddress
    registerStep: RegisterStep = RegisterStep.UserMainData

    constructor(
        private buyerService: BuyerService,
        private authService: AuthService
    ){}

    setRegisterStep(event:any, newRegisterStep: RegisterStep) {
        this.userData = event;
        this.registerStep = newRegisterStep
    }
    finishUserRegistration(event: any){
        let buyer : BuyerCreate = {
            name: this.userData.fullName,
            primary_email : this.userData.email,
            primary_phone_number: this.userData.phoneNumber,
            password: this.userData.password
        }
        let address : AddressCreateWithBuyer = {
            postal_code: event.postalCode,
            country: event.country,
            state: event.state,
            city: event.city,
            street: event.street,
            residence_number: event.number,
        }
        this.authService.createBuyerWithAddress(buyer, address).subscribe({
            next: (response:any) => {
                console.log(response)
            },
            error: (response:any) => {
                console.error(response)
            }
        })
        
        // private buyerService: BuyerService
    }

}
