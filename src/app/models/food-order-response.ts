export class FoodOrderResponse {
  // Estimated time
  ET: number;
  // Order ID
  OI: string;
  // Order map: Food:amount
  OM: Map<string, number>;

}
