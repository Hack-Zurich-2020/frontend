import { Food } from './food';
import { Restaturant } from './restaturant';

export class FoodIngquiryResponse {
  // Array of Sutiable Foods
  F: Array<Food>
  // dictionary/map of food and their restaurants
  FRM: Array<string,Restaturant>

}
