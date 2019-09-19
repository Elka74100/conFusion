import { Injectable } from '@angular/core';

import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  // getDishes(): Promise<Dish[]> {
  //   return Promise.resolve(DISHES);
  // }

  // getDish(id: string): Promise<Dish> {
  //   return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]);
  // }

  // getFeaturedDish(): Promise<Dish> {
  //   return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  // }

  getDishes(): Observable<Dish[]> {
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
}
