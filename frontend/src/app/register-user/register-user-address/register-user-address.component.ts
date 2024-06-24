import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ZipcodebaseService } from 'src/app/services/zipcodebase/zipcodebase.service';

@Component({
    selector: 'app-register-user-address',
    templateUrl: './register-user-address.component.html',
    styleUrls: ['./register-user-address.component.scss']
})
export class RegisterUserAddressComponent {
    @Output() finishForm = new EventEmitter();

    addressFormGroup: FormGroup;
    get form() { return this.addressFormGroup.controls }
    constructor(
        private formBuilder: FormBuilder,
        private messageService: MessageService,
        private zipCodeBaseService: ZipcodebaseService
    ) {
        this.addressFormGroup = this.formBuilder.group({
            postalCode: [null, [Validators.required]],
            country: [null, [Validators.required]],
            state: [null, [Validators.required]],
            city: [null, [Validators.required]],
            street: [null, [Validators.required]],
            number: [null, [Validators.required]]
        });
    }
    getZipCodeInfo(){
        //TODO: When the user input the zipcode: automatically add country, city, etc 
        let zipCode = '80023'
        // this.zipCodeBaseService.getZipCodeInfo(zipCode).subscribe({
        //     next: (response) => {
        //         if(response.results[zipCode].length == 0){
        //             console.error(`Info not found for zipcode ${zipCode}`)
        //         }
        //         else{
        //             let result = response.results[zipCode][0]
        //             console.log(result)
        //         }
        //     } 
        // })
        let result = {
            "postal_code": "80023",
            "country_code": "EE",
            "latitude": "58.36040000",
            "longitude": "24.55870000",
            "city": "Pärnu",
            "state": "Pärnu maakond",
            "city_en": "Pärnu",
            "state_en": "Pärnu maakond",
            "state_code": "11",
            "province": "Pärnu linn",
            "province_code": "0624"
        }
    }
    continueRegisterUserForm() {
        if (this.addressFormGroup.invalid) {
            this.messageService.add({
                severity: 'error',
                summary: 'Invalid Form',
                detail: 'The form is invalid'
            })
        }
        else {
            const formData = this.addressFormGroup.value
            this.finishForm.emit(formData)
        }
    }
}
