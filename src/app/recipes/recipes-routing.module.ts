import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {AuthGuard} from "../auth/auth-guard.service";

// path for recipes is changed to empty string, since that route is handled inside app-routing.module
// which enables lazy loading
// guards are the only services that could be provided into routing module

const appRoutes: Routes = [
  {
    path: '', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard] },
    ]
  },
];

@NgModule({
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard // only used in recipes, so more code to load lazily
  ],
  imports: [
    RouterModule.forChild(appRoutes) // since it's not root module
  ]
})
export class RecipesRoutingModule {}
