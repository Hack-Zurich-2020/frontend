import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../models/food';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../services/api.service';
import { Restaturant } from '../models/restaturant';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {
@Input() food: Food;
@Input() restaurant: Restaturant;

@Output() addedFoodToBasket: EventEmitter<number> = new EventEmitter<number>();

  closeResult: string;

  private nutritions: {};
  private restaurantCategories: {};

  constructor(private modalService: NgbModal, private apiService: ApiService) { }

  ngOnInit(): void {
    this.getAllNutrions();
    this.getAllRestaturantCategories();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  public getNutrionName(nutritionid: number): string {
    return this.nutritions[nutritionid];
  }
  getRestaurantCategoryName(catID: number): string {
    return this.restaurantCategories[catID];
  }

  private getAllNutrions(): void {
    this.apiService.getNutritions().subscribe(data => {
   this.nutritions = data;
    });
  }

  private getAllRestaturantCategories(): void {
    this.apiService.getResturantCat().subscribe(data => {
      this.restaurantCategories = data;
    });
  }

  public addToBasket(id: number): void {
    this.addedFoodToBasket.emit(id);
  }

}
