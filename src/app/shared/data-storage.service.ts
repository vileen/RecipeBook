import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipe.model";
import "rxjs/add/operator/map";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {

  constructor(private http: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put(`https://ng-recipe-book-4859c.firebaseio.com/recipes.json?auth=${token}`, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.http.get(`https://ng-recipe-book-4859c.firebaseio.com/recipes.json?auth=${token}`)
      .map(
        (response: Recipe[]) => {
          for (let recipe of response) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return response;
        }
      )
      .subscribe(
        (response: Recipe[]) => {
          this.recipeService.setRecipes(response);
        }
      );
  }
}
