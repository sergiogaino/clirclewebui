import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  viewProductDetail(productId, categoryId) {
    this.router.navigate(['detail'], {queryParams: { productId,  categoryId }});
  }

}
