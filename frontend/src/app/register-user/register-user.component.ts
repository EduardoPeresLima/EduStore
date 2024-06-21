import { Component } from '@angular/core';

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

    userData : any;

    // registerStep: RegisterStep = RegisterStep.UserAddress
    registerStep: RegisterStep = RegisterStep.UserMainData
    setRegisterStep(event:any, newRegisterStep: RegisterStep) {
        this.userData = event;
        this.registerStep = newRegisterStep
    }
    finishUserRegistration(event: any){
        this.userData = {
            ...this.userData,
            ...event
        }
        console.log(this.userData)
    }

}
