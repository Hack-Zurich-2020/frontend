export class FoodInquiryRequest {

  // Order ID
  OI: string;
  // Food Rate, Map between FoodId:Rate (0-4) You can use ApproximateAmount enum at backEnd repo
  FR: Map<number, number>;
  // Wasted Amount (0-4) You can use ApproximateAmount enum at backEnd repo
  WA: number;
  // Waste Case
  WC: number;

}
