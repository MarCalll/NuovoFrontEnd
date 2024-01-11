import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config-stanzeStrutturaDegenza',
  templateUrl: './stanzeStrutturaDegenza.component.html',
  styleUrls: ['./stanzeStrutturaDegenza.component.scss']
})
export class StanzeStrutturaDegenzaComponent implements OnInit {

  constructor() { }

  struttureArr = ["strutt1","strutt2","strutt3","strutt4"]
  degenzeArr = ["degenz1","degenz2","degenz3","degenz4"]

  ngOnInit() {
  }

}
