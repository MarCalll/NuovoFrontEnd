import { Injectable, isDevMode } from "@angular/core";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ConfigService {

  idForDetail$ = new BehaviorSubject<string>(null);

  constructor (protected store: Store<any>) {
  }

  voceSelezionata = ""
  sideNavState = true
  toggleSideNavStateService() {
    this.sideNavState = !this.sideNavState
  }

}