import { HttpClient } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs";

export enum paths {
  stanzeLetti = '/rest/ADMIN/rooms',
  getLettiByRoomId = '/rest/ADMIN/Beds/byRoomId/',
  letti = '/rest/ADMIN/Beds'
}

@Injectable()
export class ConfigService {

  test() {
    location.reload()
  }

  constructor (protected store: Store<any>,private http: HttpClient) {
  }

  //menu
  voceSelezionata = ""
  sideNavState = true
  toggleSideNavStateService() {
    this.sideNavState = !this.sideNavState
  }

  //path
  pathDoor = this.getServerAddress('localhost:8088')
  pathGetAll : string
  setPath(path:paths) {
    this.pathGetAll = (this.pathDoor+path)
  }
  setPathWithId(path:paths,id:number) {
    this.pathGetAll = this.pathDoor+path+id
  }

  //table
  contentDatabase : any[] = [];
  dataSource: MatTableDataSource<any>;

  getServerAddress(serverUrl: string): string {
    let firstPartPath = '';
    if (serverUrl) {
      if (isDevMode()) {
        firstPartPath = '/Admin';
      } else {
        firstPartPath = '/' + window.location.pathname.match('\/(.*?)\/')[1];
      }
      serverUrl = window.location.protocol + '//' + serverUrl;
    } else {
      throw new Error('Server url errato!')
    }
    const serverRest = serverUrl +  firstPartPath + '/s';
 
    return serverRest;
  }
 
  getAll() {
    this.http.get<any[]>(this.pathGetAll).subscribe(data => {
      this.contentDatabase = data;
      this.dataSource.data = this.contentDatabase;
    })
  }

  updateRoom_id(item:any,contentDatabase:any[],dataSource:MatTableDataSource<any>) {
    if (item && item.id_room) {

      this.http.put<any>(this.pathGetAll + `/${item.id_room}`, item)
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

}