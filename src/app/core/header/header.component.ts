import { Component } from '@angular/core';
import { DataStorageService } from "../../shared/data-storage.service";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();
  //
  // constructor() { }
  //
  // ngOnInit() {
  // }
  //
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpResponse<any>) => {
          console.log(response);
          return response;
        }
      );
  }

  onGetData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
