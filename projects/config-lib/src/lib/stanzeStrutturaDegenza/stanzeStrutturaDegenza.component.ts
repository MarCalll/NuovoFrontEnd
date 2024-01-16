import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'config-stanzeStrutturaDegenza',
  templateUrl: './stanzeStrutturaDegenza.component.html',
  styleUrls: ['./stanzeStrutturaDegenza.component.scss']
})
export class StanzeStrutturaDegenzaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  path = 'http://localhost:8080/Admin/s/rest/ADMIN/Rooms/getAllStrutture'

  struttureArr = ["strutt1","strutt2","strutt3","strutt4"]
  degenzeArr = ["degenz1","degenz2","degenz3","degenz4"]

  struttureDatabase : any[] = [];
  struttureDataSource : MatTableDataSource<any>;
  
  test() {
    this.http.get<any[]>(this.path).subscribe(data => {
      this.struttureDatabase = data;
      this.struttureDataSource.data = this.struttureDatabase;
    })
  }

  ngOnInit() {
  }

}
