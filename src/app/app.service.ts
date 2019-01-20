import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
@Injectable({
  providedIn: 'root',
})

export class AppService {

  private currentPriceUrl = 'http://api.coindesk.com/v1/bpi/currentprice.json';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  getURLSearchParam() {

    let param;

    this.activatedRoute.queryParams.subscribe(params => {
        param = params['search'];
    });

    return param;
  }


  async getRecomendations(categoryId: string): Promise<Array<any>> {
    // tslint:disable-next-line:max-line-length
    const response = await this.http.get<any>(`https://recs.richrelevance.com/rrserver/api/rrPlatform/recsForPlacements?apiKey=e20fd45b1e19a8c6&apiClientKey=ef8848629c16a5b4&placements=category_page.discover&categoryId=${categoryId}&returnMinimalRecItemData=true&start=0&pageCount=20&count=100&excludeHtml=true&excludeItemAttributes=true&userId=&sessionId=lxekym1547725563973rn83frb&_=1547921871150`).toPromise();
    const recommendedProducts = response.placements[0].recommendedProducts;
    recommendedProducts.splice(10, Number.MAX_VALUE); // remove excessive itens
    return recommendedProducts;
  }

  async getRecomendedProduct(sku: string): Promise<string> {
    // tslint:disable-next-line:max-line-length
    const response = await this.http.get<any>(`https://recs.richrelevance.com/rrserver/api/find/v1/e20fd45b1e19a8c6?facetDepth=5&lang=pt&log=true&placement=search_page.find&query=${sku}&rcs=eF4NyLERgCAMBdCGyl3-XRISAhu4hhC4s7BT59dXvrRd730GsTKBTb2JeNPMDhGA0zN26zFXHop5cIGGdVDJBb3aH9M8qH6BGhHm&region=test-region&rows=24&sessionId=lxekym1547725563973rn83frb&sort=&ssl=true&start=0&userId=`).toPromise();
    const recommendedProducts = response.placements[0].docs[0];
    return recommendedProducts;
  }

  async getPromotions(categoryId: string): Promise<Array<any>> {
    // tslint:disable-next-line:max-line-length
    const response = await this.http.get<any>(`https://recs.richrelevance.com/rrserver/api/rrPlatform/recsForPlacements?apiKey=e20fd45b1e19a8c6&apiClientKey=ef8848629c16a5b4&placements=category_page.discover&categoryId=${categoryId}&returnMinimalRecItemData=true&start=0&pageCount=20&count=100&excludeHtml=true&excludeItemAttributes=true&userId=&sessionId=lxekym1547725563973rn83frb&_=1547921871150`).toPromise();
    const promotionalProduct = response.placements[0].recommendedProducts;
    promotionalProduct.splice(10, Number.MAX_VALUE); // remove excessive itens
    return promotionalProduct;
  }

  async getPromotionalProduct(sku: string): Promise<string> {
    // tslint:disable-next-line:max-line-length
    const response = await this.http.get<any>(`https://recs.richrelevance.com/rrserver/api/find/v1/e20fd45b1e19a8c6?facetDepth=5&lang=pt&log=true&placement=search_page.find&query=${sku}&rcs=eF4NyLERgCAMBdCGyl3-XRISAhu4hhC4s7BT59dXvrRd730GsTKBTb2JeNPMDhGA0zN26zFXHop5cIGGdVDJBb3aH9M8qH6BGhHm&region=test-region&rows=24&sessionId=lxekym1547725563973rn83frb&sort=&ssl=true&start=0&userId=`).toPromise();
    const promotionalProduct = response.placements[0].docs[0];
    return promotionalProduct;
  }

}
