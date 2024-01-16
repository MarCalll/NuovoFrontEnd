import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../store/config.service';

@Component({
  selector: 'config-sideNav',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(protected service:ConfigService) { }

  ngOnInit() {
  }

  topBarTitle:string

  listaMenu = [
    { nome: "Stanze/letti", path: "gStanze" },
    { nome: "Corsie", path: "tabdue" },
    { nome: "Requisiti chiusura cartella", path: "gStanze" },
    { nome: "Regole documentali", path: "tabdue" },
    { nome: "Moduli clinici", path: "gStanze" },
    { nome: "Configurazione protocolli", path: "tabdue" },
    { nome: "Fasce orarie", path: "gStanze" },
    { nome: "Motivi mancata esecuzione", path: "tabdue" },
    { nome: "Tiles e carelets", path: "gStanze" },
    { nome: "Diari", path: "tabdue" },
    { nome: "Configurazione CF", path: "gStanze" },
    { nome: "Proprieta documenti eward", path: "tabdue" },

  ]

  backuplistaMenu = this.listaMenu
  parolaRicercata = null

  searchMenuInput(evento:any) {
    this.parolaRicercata = evento.target.value.toLowerCase()
    this.listaMenu = []

    for(let voce of this.backuplistaMenu) {

      if(voce.nome.toLowerCase().includes(this.parolaRicercata)) {
        this.listaMenu.push(voce)
      }
    }
  }

  setTopBarTitle (item:string) {
    this.service.voceSelezionata = item
  }

}
