import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {DropdownDirective} from "./dropdown.directive";

// exporting elements used in multiple places

@NgModule({
  declarations: [
    DropdownDirective
  ],
  exports: [
    CommonModule,
    DropdownDirective
  ]
})
export class SharedModule { }
