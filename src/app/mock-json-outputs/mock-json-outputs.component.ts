import { Component, OnInit } from '@angular/core';
import { Filter } from '../models/filter';
import { ApiService } from '../services/api.service';
import { FoodIngquiryResponse } from '../models/food-ingquiry-response';
import { Restaturant } from '../models/restaturant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mock-json-outputs',
  templateUrl: './mock-json-outputs.component.html',
  styleUrls: ['./mock-json-outputs.component.scss']
})
export class MockJsonOutputsComponent implements OnInit {

  public foodCategoryFilterItem: Filter[];
  public nutritionFilterItem: Filter[];
  public restaurantCategoryFilterItem: Filter[];


  public shoppingList: Array<number> = [];

  public foods: FoodIngquiryResponse;
  public userID: string;
  private foodsBackup: FoodIngquiryResponse;
  private test: number;
  private selectedFoodCategory: any;
  private selectedNutrion: any;
  private selectedRestaturantCat: any;


  constructor(private apiService: ApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUserID();
    this.hitSearch();
    this.initFoodCategroy();
    this.initNutritions();
    this.initRestaurantCategories();
  }

  getRestaturantforFoodID(foodID: number): Restaturant {
    return this.foods.FRM[foodID.toString()];
  }

  changeFoodCategory(event: any) {
    this.selectedFoodCategory = event.target.value;
    this.filterAll();
  }

  changeNutrition(event: any) {
    this.selectedNutrion = event.target.value;
  }

  changeRestCat(event: any) {
    this.selectedRestaturantCat = event.target.value;
  }

  public hitSearch(): void {
    this.apiService.postFoodInquire(this.userID).subscribe(data => {
      this.foods = data;
    });
  }

  public addFoodToShoppingList(event): void {
    console.log(event);
    this.shoppingList.push(event);
  }

  public orderFood(): void {
    this.apiService.postOrderFood(this.userID, this.shoppingList).subscribe(data => {
      console.log(data);
    });
  }

  private getUserID(): void {
    // this.userID = history.state.userID;
    this.userID = 'sgsag';
  }

  private initFoodCategroy(): void {
    const foodCategories: Filter[] = [
      new Filter('HALAL', 0),
      new Filter('KOSHER', 1),
      new Filter('FAST_FOOD', 2),
      new Filter('ASIAN', 3),
      new Filter('KEBAB', 4),
      new Filter('MEDITERRANEAN', 5),
      new Filter('NON_ALCOHOL', 6),
      new Filter('VEGAN', 7)
    ];
    this.foodCategoryFilterItem = foodCategories;
  }

  private initNutritions(): void {
    const nutritons: Filter[] = [
      new Filter('FAT', 0),
      new Filter('SUGAR', 1),
      new Filter('CALORIE', 2),
      new Filter('HDL', 3),
      new Filter('LDL', 4),
      new Filter('FIBRE', 5),
      new Filter('WATER', 6),
      new Filter('SALT', 7),
      new Filter('PRESERVATIVES', 8)
    ];
    this.nutritionFilterItem = nutritons;
  }

  private initRestaurantCategories(): void {
    const restaturantCategories: Filter[] = [
      new Filter('TAKEOUT_ONLY', 0),
      new Filter('HAS_DELIVERY', 1),
      new Filter('ASIAN', 2),
      new Filter('KEBAB', 3),
      new Filter('VEGAN', 4),
      new Filter('HALAL', 5),
      new Filter('KOSHER', 6)
    ];
    this.restaurantCategoryFilterItem = restaturantCategories;
  }

  private filterAll() {


    this.apiService.postFoodInquire(this.userID).subscribe(data => {
      if (this.selectedFoodCategory !== '-') {

        this.filterFoodCategory(data);

        this.foods = data;
      } else {
      this.foods = data; }
    });


  }

  private filterFoodCategory(input: FoodIngquiryResponse): any {
    const newOutput: FoodIngquiryResponse = Object.assign({}, input);

    input.F.forEach((data, index) => {
      console.log(data.FC.indexOf(this.selectedFoodCategory));
      console.log(data.FC.includes(this.selectedFoodCategory));
      if (!data.FC.indexOf(this.selectedFoodCategory)) {
        console.log(data.FC);
        newOutput.F.splice(index, 1);

      }

    });

    return newOutput;
  }

}
