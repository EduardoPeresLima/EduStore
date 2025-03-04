import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyerCreate } from 'src/app/interfaces/buyer';
import { AddressCreateWithBuyer } from 'src/app/interfaces/address';
import { environment } from 'src/environments/env';

@Injectable({
    providedIn: 'root'
})
export class BuyerService {
    constructor(
        private http: HttpClient
    ) { }
    private buyerURL = environment.BACKEND_URL + "/buyer";

    httpOptionsJson = {
        headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${this.authService.getDataInLocalStorage('token')}`
        })
    }
    // createBuyerWithAddress(buyerData:BuyerCreate, addressData: AddressCreateWithBuyer){
    //     const url = `${this.buyerURL}/buyer_with_address`
    //     return this.http.post<any>(url,{'buyer':buyerData, 'address':addressData}, this.httpOptionsJson,);
    // }
    
}
