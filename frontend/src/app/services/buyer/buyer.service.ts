import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BuyerCreate } from 'src/app/interfaces/buyer';
import { AddressCreateWithBuyer } from 'src/app/interfaces/address';

@Injectable({
    providedIn: 'root'
})
export class BuyerService {
    constructor(
        private http: HttpClient
    ) { }
    private URL = 'http://localhost:8000'
    private buyerURL = this.URL + "/buyer";

    httpOptionsJson = {
        headers: new HttpHeaders({
            //   'Content-Type': 'application/json',
            //   'Authorization': `Bearer ${this.authService.getDataInLocalStorage('token')}`
        })
    }
    createBuyerWithAddress(buyerData:BuyerCreate, addressData: AddressCreateWithBuyer){
        const url = `${this.buyerURL}/buyer_with_address`
        return this.http.post<any>(url,{'buyer':buyerData, 'address':addressData}, this.httpOptionsJson,);
    }
    
}
