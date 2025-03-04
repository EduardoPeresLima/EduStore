import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/env';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private productURL = environment.BACKEND_URL + "/product";
    
    constructor(
        private http: HttpClient,
    ) { }
    getAllProducts() {
        const url = `${this.productURL}/`
        return this.http.get<any>(url);
    }
    getProductById(productId: number){
        const url = `${this.productURL}/by_id/${productId}`
        return this.http.get<any>(url);
    }
    getProductsInSale(limit:number){
        const url = `${this.productURL}/sale?limit=${limit}`
        return this.http.get<any>(url);

    }
}
