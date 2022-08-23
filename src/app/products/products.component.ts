import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Product } from './products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private product: DataService, private router: Router) {}

  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.products);
      console.log(data);
    });
  }

  getDetails(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/product', product.id]);
  }
}
