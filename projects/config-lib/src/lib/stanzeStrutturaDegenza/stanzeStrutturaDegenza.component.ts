import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ConfigService,paths } from '../store/config.service';

@Component({
  selector: 'config-stanzeStrutturaDegenza',
  templateUrl: './stanzeStrutturaDegenza.component.html',
  styleUrls: ['./stanzeStrutturaDegenza.component.scss']
})
export class StanzeStrutturaDegenzaComponent implements OnInit {

  constructor(private http: HttpClient,private service:ConfigService) { }

  path = this.service.getPath(paths.getAllStrutture)

  strutture = []
  degenzeArr = ["degenz1","degenz2","degenz3","degenz4"]

  ngOnInit() {
    this.http.get<any[]>(this.path).subscribe(data => {
      for(let ele of data) {
        this.strutture.push({id:ele.id,room_number:ele.srDescrizione})
      }
    })
  }

  selectStruttura(ele:any) {
    console.log('mando al backend: ' + ele.id)
  }

}
