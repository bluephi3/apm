import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";

@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Initial Product List';
  imageMargin: number = 2;
  imageWidth: number = 50;
  showImage: boolean = false;
  _listFilter: string;
  filteredProducts: IProduct[];
  private errorMessage: string;

  get listFilter() : string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  products: IProduct[];

  constructor(private productService: ProductService) {
  }

  public toggleImage() : void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit');
    this.productService.getProducts().subscribe({
      next: products => this.filteredProducts = this.products = products,
      error: err => this.errorMessage = err
    })
  }

  private performFilter(listFilter: string) : IProduct[] {
    return this.products.filter(product => product.productName.toLocaleLowerCase().includes(listFilter.toLocaleLowerCase(), 0));
  }

  onRatingClicked($event: String) {
    console.log('Product List says: ' + $event);
    this.pageTitle = 'Product List: ' + $event;
  }
}
