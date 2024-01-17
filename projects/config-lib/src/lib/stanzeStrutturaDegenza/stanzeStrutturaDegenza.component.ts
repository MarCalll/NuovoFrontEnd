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

  pathStrutture = this.service.getPath(paths.getAllStrutture)
  pathDegenza = this.service.getPath(paths.getAllDegenze)

  strutture = []
  degenze = []

  ngOnInit() {
    this.http.get<any[]>(this.pathStrutture).subscribe(data => {
      for(let ele of data) {
        this.strutture.push({id:ele.id,stDescrizione:ele.stDescrizione})
      }
    })
  }

  selectStruttura(strutturaId:any) {
    this.http.get<any[]>(this.pathDegenza).subscribe(data => {
      this.degenze = []
      for(let ele of data) {
        var stIdStrutt = ele.stId.id;
        if(strutturaId == stIdStrutt){
          this.degenze.push({id:ele.id,srDescrizione:ele.srDescrizione})
        }
      }
    })
  }

  selectDegenza(degenzaId:any) {
    this.service.setPathWithId(paths.stanzeLetti,degenzaId)
    this.service.getAll()
    console.log(this.service.dataSource.data)
    console.log(this.service.contentDatabase)
  }

}
