import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  // constructor() { }

  // getPromotions(): Observable<Promotion[]> {
  //   return of(PROMOTIONS).pipe(delay(2000));
  // }

  // getPromotion(id: string): Observable<Promotion> {
  //   return of(PROMOTIONS.filter((promotion) => (promotion.id === id))[0]).pipe(delay(2000));
  // }

  // getFeaturedPromotion(): Observable<Promotion> {
  //   return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe(delay(2000));
  // }

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService,
    ) { }

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(baseURL + 'promotions')
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getPromotion(id: string): Observable<Promotion> {
    return this.http.get<Promotion>(baseURL + 'promotions/' + id)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFeaturedPromotion(): Observable<Promotion> {
    return this.http.get<Promotion[]>(baseURL + 'promotions?featured=true').pipe(map(promotions => promotions[0]))
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }


}
