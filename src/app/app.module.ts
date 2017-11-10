import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";
import {CoreModule} from "./core/core.module";

// TODO:
// Check if a token is present at application startup (check the localStorage manually or use the Firebase SDK to do so -
// just make sure that you somehow wait for the SDK to finish its initialization)

// Redirect the user if he want to access a protected route (right now, nothing happens) - inject the router and call
// this.router.navigate(...) to do so

// Redirect the user on logout so that he's not able to stay on pages which are reserved for authenticated users -
// you can simply inject the router and call this.router.navigate(...) in the logout() method


// recipes module is removed from here, to perform lazy loading which takes place in app-routing.module
// module gets loaded when url matches recipes

@NgModule({
  declarations: [
    AppComponent, // app.module should contain only app component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule // every component used in app component only + providers
  ],
  bootstrap: [AppComponent] // < --root component
})
export class AppModule {
}
