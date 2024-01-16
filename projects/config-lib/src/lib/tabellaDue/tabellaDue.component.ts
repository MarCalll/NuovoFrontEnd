import { Component, OnInit } from '@angular/core';
import { ConfigService, paths } from '../store/config.service';

@Component({
  selector: 'config-tabellaDue',
  templateUrl: './tabellaDue.component.html',
  styleUrls: ['./tabellaDue.component.scss']
})
export class TabellaDueComponent implements OnInit {

  constructor(private service:ConfigService) { }

  ngOnInit() {
    this.service.setPath(paths.letti)
  }

}
