import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../products/products.model';
import { appConstant } from '../app.constant';
import { environment } from '../environments/environment';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | any = '';
  productForm: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data: any) => {
      this.getProduct((data as any).id);
    });
    this.initialize();
  }
  initialize() {
    this.initializeForm(this.product);
  }

  initializeForm(product: any) {
    this.productForm = this.fb.group({
      title: [product.title, Validators.required],
      description: [product.description, Validators.required],
      brand: [product.brand, Validators.required],

      price: [product.price, Validators.required],
      category: [product.category, Validators.required],
      stock: [product.stock, Validators.required],
      rating: [product.rating, Validators.required],
    });
  }

  onSubmit(formValue: any, isValid: boolean) {
    console.log(formValue);
    console.log(isValid);
  }

  getProduct(id: number) {
    this.http
      .get(`${environment.apiEndpoint}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data: any) => {
        this.product = data;
        this.initializeForm(data);
        console.log(data);
      });
  }
}
