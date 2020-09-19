import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodIngquiryResponse } from '../models/food-ingquiry-response';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  public postUserRequest(): Observable<FoodIngquiryResponse>  {
    return this.http.get<FoodIngquiryResponse>('assets/mock-food-inquiry-response.json');
  }

  public getNutritions(): Observable<{}> {
    return this.http.get<{}>('assets/nutritions.json');
  }
}
