import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../models/food';

@Component({
  selector: 'app-food-card',
  templateUrl: './food-card.component.html',
  styleUrls: ['./food-card.component.scss']
})
export class FoodCardComponent implements OnInit {
@Input() food: Food;
  constructor() { }

  ngOnInit(): void {
  }

}
