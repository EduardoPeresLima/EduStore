import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private URL = 'http://localhost:8000'
    private productURL = this.URL + "/product";
    
    constructor(
        private http: HttpClient,
    ) { }
    getAllProducts() {
        const url = `${this.productURL}/`
        return this.http.get<any>(url);
    }
}
