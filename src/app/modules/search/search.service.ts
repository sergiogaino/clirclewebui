import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SearchService {

  constructor(private http: HttpClient) { }

  searchProducts(params: string): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<any>(`https://recs.richrelevance.com/rrserver/api/find/v1/e20fd45b1e19a8c6?facetDepth=5&lang=pt&log=true&placement=search_page.find&query=${params}&rcs=eF4NyLERgDAIBdAmlbv8OyAQMoJrmEDuLOzU-fWVr2zXe59BrExgU3fpykakEAG4PHO3EbnqVOTBDRo2QK02jG5_pHlQ_wB-mBHZ&region=test-region&rows=24&sessionId=lxekym1547725563973rn83frb&sort=&ssl=true&start=0&userId=`);
  }
}
