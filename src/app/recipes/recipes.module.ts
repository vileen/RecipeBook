import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item/recipe-item.component";
import {RecipesRoutingModule} from "./recipes-routing.module";
import {SharedModule} from "../shared/shared.module";

// imports cannot be duplicated thorough modules, views are using DropdownDirective, but
// it can't be imported here, so that feature is not enabled for components below
// solution for that case is creating SharedModule
@NgModule({
  declarations: [
    RecipesComponent,
    RecipeStartComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipeItemComponent
  ],
  imports: [
    CommonModule, // BrowserModule contains it in app.component, but only CommonModule is needed here
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule { }
