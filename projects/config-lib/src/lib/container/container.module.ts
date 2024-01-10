import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MaterialModule } from '../shared/material.module';
import { MatPaginatorModule } from '@angular/material';

import { ContainerComponent } from './container.component';
import { SideNavComponent } from '../sideNav/sideNav.component';
import { ToptoolbarComponent } from '../toptoolbar/toptoolbar.component';
import { GenericTableComponent } from '../genericTable/genericTable.component';
import { TabellaDueComponent } from '../tabellaDue/tabellaDue.component';
import { GestioneStanzeComponent } from '../gestioneStanze/gestioneStanze.component';
import { BedDialogBoxComponent } from '../dialog/bedDialogBox/bedDialogBox.component';
import { RoomEditDialogBoxComponent } from '../dialog/roomEditDialogBox/roomEditDialogBox.component';

@NgModule({
  imports: [    CommonModule,
    SharedModule,
    MaterialModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {
        path: '', // Route vuota per rendere ContainerComponent la route principale
        component: ContainerComponent,
        children:[
          {path: 'gStanze', component: GestioneStanzeComponent},
          {path: 'tabdue', component: TabellaDueComponent},
        ]
      }
    ])
  ],
  exports: [ContainerComponent],
  declarations: [
    ContainerComponent,
    SideNavComponent,
    ToptoolbarComponent,
    GenericTableComponent,
    TabellaDueComponent,
    GestioneStanzeComponent,
    BedDialogBoxComponent,
    RoomEditDialogBoxComponent
  ],
  entryComponents:[
    BedDialogBoxComponent,
    RoomEditDialogBoxComponent
  ]
  })
export class ContainerModule { 
  static forRoot(): ModuleWithProviders {
  return {
    ngModule: ContainerModule,
    providers: []
  };
} }
