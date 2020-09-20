import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodIngquiryResponse } from '../models/food-ingquiry-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  public postUserRequest(): Observable<FoodIngquiryResponse> {
    return this.http.get<FoodIngquiryResponse>('assets/mock-food-inquiry-response.json');
  }

  public postFoodInquire(userID): Observable<FoodIngquiryResponse> {
    const body = {
      UI: userID,
      LO: 50.1,
      LA: 50
    };
    return this.http.post<FoodIngquiryResponse>('http://localhost:8080/food/inquire', body);
  }

  public getNutritions(): Observable<{}> {
    return this.http.get<{}>('assets/nutritions.json');
  }

  public getResturantCat(): Observable<{}> {
    return this.http.get<{}>('assets/restaurant-categories.json');
  }

  public createUser(body: any): Observable<any> {
    return this.http.post('http://localhost:8080/user/register', body);
  }

  public postOrderFood(userID: string, foodIDList: Array<number>): Observable<any> {
    const body = {
      FI: foodIDList,
      UI: userID,
      LO: 50.1,
      LA: 50
    };
    return this.http.post('http://localhost:8080/food/order', body);
  }
}
