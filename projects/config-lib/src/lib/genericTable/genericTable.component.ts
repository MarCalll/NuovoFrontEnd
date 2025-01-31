import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BedDialogBoxComponent } from '../dialog/bedDialogBox/bedDialogBox.component';
import { ConfigService } from '../store/config.service';
import { RoomEditDialogBoxComponent } from '../dialog/roomEditDialogBox/roomEditDialogBox.component';
import { RoomDeleteDialogBoxComponent } from '../dialog/roomDeleteDialogBox/roomDeleteDialogBox.component';

@Component({
  selector: 'config-genericTable',
  templateUrl: './genericTable.component.html',
  styleUrls: ['./genericTable.component.scss']
})
export class GenericTableComponent implements OnInit {

  constructor(private http: HttpClient,protected dialog:MatDialog,private service:ConfigService) { }

  ngOnInit() {
    this.service.dataSource = this.dataSource
    this.service.getAll();

    if (this.actions == true) {
      this.displayedColumns.push('actions');
    }
    // cambio nome delle tabelle
    if (this.renameColumns && this.renameColumns.length > 0) {
      for (let i = 0; i < this.displayedColumns.length; i++) {
        const columnsDB = this.displayedColumns[i];
        const renamedColumn = this.renameColumns[i];
        this.colonneTabella.push({ nomeVisualizzato: renamedColumn, colonnaDatabase: columnsDB });
      }
    }else{
        for (let i = 0; i < this.displayedColumns.length; i++) {
          const columnsDB = this.displayedColumns[i];
          this.colonneTabella.push({ nomeVisualizzato: columnsDB, colonnaDatabase: columnsDB });
        }
    }
    if (this.itemPerPage==null) {
      this.itemPerPage = 10
    }

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  @Input() displayedColumns: string[]
  @Input() renameColumns: string[]
  @Input() itemPerPage: number;

  @Input() actions: boolean;
  @Input() bedManagement : boolean;
  @Input() roomEditButton : boolean;
  @Input() deleteButton : boolean;
  @Input() tablesearch : boolean;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  colonneTabella =[];

  dataSource = new MatTableDataSource<any>();

  openBedDialog(item: any) {
    this.dialog.open(BedDialogBoxComponent, {
      width: '3000px',
      data: { id_room: item.id_room,
        room_number: item.room_number
      }
    });
  }

  roomOpenEditDialog(item: any) {
    this.dialog.open(RoomEditDialogBoxComponent, {
      width: "1000px",
      data: {
        displayedColumns: this.displayedColumns,
        item: item,
        contentDatabase : this.service.contentDatabase,
        dataSource : this.service.dataSource
      }
    });

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openRoomDeleteDialog(item: any) {
    this.dialog.open(RoomDeleteDialogBoxComponent, {
      data: { 
        item: item,
        contentDatabase : this.service.contentDatabase,
        dataSource : this.service.dataSource
      }
    });
  }

}

