import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from './detail.service';
import { AppService } from '../../app.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  productId: string;
  categoryId: string;
  productDetail: object;
  recomendations = [];
  showLoadRecomendations = true;
  showLoadDetails = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private detailService: DetailService,
    private appService: AppService,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.getQueryParms();
    this.getProductDetail();
    this.listRecomendations();
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
      this.showLoadDetails = false;
    });
  }

  async listRecomendations() {

    let recomendedProducts = null;

    for (let i = 0; i <= this.categoryId.length; i++) {
      if (recomendedProducts != null) { break; }
      recomendedProducts = await this.appService.getRecomendations(this.categoryId[0]);
    }

    recomendedProducts.forEach(async product => {

      const sku = product.id;
      const recomendedProdut = await this.appService.getRecomendedProduct(sku);
      this.recomendations.push(recomendedProdut);

    });
    this.showLoadRecomendations = false;
  }

  goToConfirmation(product) {
    this.router.navigate(['confirmation'], {queryParams: { product: product }});
  }

}
