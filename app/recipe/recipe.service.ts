import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

 export class RecipeService { 
recipeSelected = new EventEmitter<Recipe>();
        //property: class recipe
    recipes:Recipe[]=[
        new Recipe('A Test Recipe','This is simply a test',
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
        [
            new Ingredient ('rice',1),
            new Ingredient ('meal',3),
            new Ingredient (' egg',1)
        ]),
        new Recipe('A Test Recipe','This is simply a test','../src/app/img/1.jpg',
        [
            new Ingredient('rice',1),
            new Ingredient ('meal',3),
            new Ingredient('egg', 1)
        ]),
        ];
    getRecipes(){
          return this.recipes.slice();
      }
      addIngredientsShoppingList(ingredients: Ingredient[]){
          this.slsService.addIngredients(ingredients) ;
      }

  constructor (private slsService: ShoppingListService) {}
 }
 



