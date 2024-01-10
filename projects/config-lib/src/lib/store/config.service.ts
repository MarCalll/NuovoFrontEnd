import { HttpClient } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class ConfigService {

  idForDetail$ = new BehaviorSubject<string>(null);

  constructor (protected store: Store<any>,private http: HttpClient) {
  }

  voceSelezionata = ""
  sideNavState = true

  pathGetAll : string;
  contentDatabase : any[];
  dataSource: MatTableDataSource<any>;

  toggleSideNavStateService() {
    this.sideNavState = !this.sideNavState
  }
  
  updateRoom_id(item:any,pathGetAll:string,contentDatabase:any[],dataSource:MatTableDataSource<any>) {
    if (item && item.id_room) {
      console.log('Dati inviati nella richiesta:', item);
  
      this.http.put<any>(pathGetAll + `/${item.id_room}`, item)
        .subscribe(response => {
          const index = contentDatabase.findIndex(s => s.id === item.id_room);
          if (index !== -1) {
            contentDatabase[index] = response;
            dataSource.data = contentDatabase;
          }
        });
    } else {
      console.error('L\'oggetto stanza da aggiornare è indefinito o non ha un ID.');
    }
  }

  getAll() {
    this.http.get<any[]>(this.pathGetAll).subscribe(data => {
      this.contentDatabase = data;
      this.dataSource.data = this.contentDatabase;
    });
  }

}