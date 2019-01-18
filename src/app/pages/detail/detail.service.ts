import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DetailService {
    constructor( private http: HttpClient ) {}

    getProductInformations(params: string): Observable<any> {

        const headers = new HttpHeaders({
        'Authorization': `Basic YWRtaW46YWRtaW4=`
        });

        const options = { headers: headers };

        return this.http.get<any>('https://ccstore-test-zdqa.oracleoutsourcing.com/ccstoreui/v1/products/prd0001', options);
    }

    getRecomendations(params: string): Observable<any> {
        return this.http.get<any>(`https://www.riachuelo.com.br/elasticsearch/data/products?category_id=${params}`);
    }
}
