import { Component, OnInit } from '@angular/core';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public foodCategoryFilterItem: Filter[];
  public nutritionFilterItem: Filter[];
  public restaurantCategoryFilterItem: Filter[];


  constructor() {
  }

  ngOnInit(): void {
    this.initFoodCategroy();
    this.initNutritions();
    this.initRestaurantCategories();
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
    ]
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
    ]
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
    ]
    this.restaurantCategoryFilterItem = restaturantCategories;
  }


}