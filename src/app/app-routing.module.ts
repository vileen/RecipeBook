import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./core/home/home.component";

// shopping list module is defined in another module, but that's not a problem for routing
// it's a problem if i would use selector, then it needs to be defined in this module
// use canLoad in recipes path to prevent from fetching module if,
// for example, the user is not logged in

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }, // lazy loading
  { path: 'shopping-list', component: ShoppingListComponent }
];

// preloadingStrategy is an option to preload lazy loaded modules after the rest of the app has been loaded
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
