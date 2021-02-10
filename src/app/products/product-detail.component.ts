import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: IProduct;
  pageTitle: string = 'Product Details';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0111',
      'releaseDate': 'March 19, 2019',
      'description': 'Leaf rake with a wooden handle',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assests/images/leaf_rake.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
