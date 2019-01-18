import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productId: string;
  categoryId: string;
  productDetail: object;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private detailService: DetailService,
  ) { }

  ngOnInit() {
    this.getQueryParms();
    this.getProductDetail();
  }

  getQueryParms() {
    this.route.queryParams.subscribe(params => {
      this.productId = params['productId'];
      this.categoryId = params['categoryId'];
    });
  }

  getProductDetail() {
    this.detailService.getProductInformations(this.productId).subscribe((productDetail) => {
      this.productDetail = productDetail;
    });
  }

}
