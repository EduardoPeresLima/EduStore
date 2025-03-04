import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
    productId: number = 0
    loadingComponent: boolean = true
    product : any = null
    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductService,
        private messageService: MessageService
    ){}
    ngOnInit(): void {
        this.productId = +(this.activatedRoute.snapshot.paramMap.get('id') || '');
        this.productService.getProductById(this.productId).subscribe({
            next: (response:any) => {
                this.loadingComponent = false
                this.product = response
            },
            error: (err:any) => {
                this.loadingComponent = false
            }
        })
    }
    buyItem(product_id:number){
        // console.log('buy ',product_id)
        this.messageService.add({
            severity: 'warn',
            summary: 'Buying is still under development',
            detail: ''
        })
    }
}
