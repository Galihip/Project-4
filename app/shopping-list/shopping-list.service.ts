import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';


@Injectable({
    providedIn:'root'
})

export class ShoppingListService{
    IngredientChange = new EventEmitter<Ingredient[]>();

private ingredients:Ingredient[]=[
    new Ingredient('Apples',23),
    new Ingredient('Tomato',10),
  ];
  
  constructor() { }
  getIngredient(){
      return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.IngredientChange.emit(this.ingredients.slice());
  }
  addIngredients(ingredient:Ingredient[]){
      this.ingredients.push(...ingredient);
      this.IngredientChange.emit(this.ingredients.slice());
  }
}