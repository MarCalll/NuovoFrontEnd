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

  struttureArr = []
  struttureSet = new Set()
  degenzeArr = ["degenz1","degenz2","degenz3","degenz4"]

  ngOnInit() {
    this.http.get<any[]>(this.path).subscribe(data => {
      for(let ele of data) {
        this.struttureArr.push(ele.stDescrizione)
      }
      this.struttureSet = new Set(this.struttureArr);
    })

  }

}
