import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
    selector: 'app-home-products',
    templateUrl: './home-products.component.html',
    styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent {
    carouselResponsiveOptions = [
        {
            breakpoint: '1366px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '730px',
            numVisible: 1,
            numScroll: 1
        }
    ];
    products: any[] = [
    ]
    constructor(
        private productService: ProductService,
        private router: Router
    ) { }
    updateProductsCountdown(): boolean {
        let now = new Date().getTime();

        let all_expired = true;
        for (let topSale of this.products) {
            let distance = new Date(topSale.saleExpireDatetime).getTime() - now;
            if (distance <= 0) {
                topSale.countdown_timer = 'EXPIRED';
            }
            else {
                all_expired = false;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                topSale.countdown_timer = `${days > 0 ? days.toString() + 'd ' : ''} ${(hours < 10 ? '0' : '') + hours}:${(minutes < 10 ? '0' : '') + minutes}:${(seconds < 10 ? '0' : '') + seconds}`;
            }
        }
        return all_expired
    }
    ngOnInit(): void {

        this.productService.getAllProducts().subscribe({
            next: (products: any) => {
                this.products = products

                for (let product of this.products) {
                    product.saleExpireDatetime = '2024-08-08 00:00:00';
                }
                var countdownInterval = setInterval(() => {
                    let all_expired = this.updateProductsCountdown();
                    if (all_expired) {
                        clearInterval(countdownInterval);
                    }
                }, 1000);
            }
        })
    }
    buyItem(product_id: number) {
        this.router.navigate(['product', product_id])
    }
}
