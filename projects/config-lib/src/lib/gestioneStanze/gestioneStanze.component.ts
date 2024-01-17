import { Component, OnInit } from '@angular/core';
import { GenericTableComponent } from '../genericTable/genericTable.component';
import { ConfigService,paths } from '../store/config.service';

@Component({
  selector: 'config-gestioneStanze',
  templateUrl: './gestioneStanze.component.html',
  styleUrls: ['./gestioneStanze.component.scss']
})
export class GestioneStanzeComponent implements OnInit {

  constructor(private service:ConfigService) { }

  ngOnInit() {
  }

}
