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
    this.loadTableData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  @Input() displayedColumns: string[]
  @Input() pathGetAll: string;
  @Input() itemPerPage: number;

  @Input() actions: boolean;
  @Input() bedManagement : boolean;
  @Input() roomEditButton : boolean;
  @Input() deleteButton : boolean;
  @Input() tablesearch : boolean;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>();
  
  loadTableData() {
    this.loadService()
    this.service.getAll();

    if (this.actions == true) {
      this.displayedColumns.push('actions');
    }
    if (this.itemPerPage==null) {
      this.itemPerPage = 10
    }

  }

  loadService() {
    this.service.pathGetAll = this.pathGetAll
    this.service.dataSource = this.dataSource
  }

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
        pathGetAll: this.pathGetAll,
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
        pathGetAll: this.pathGetAll,
        contentDatabase : this.service.contentDatabase,
        dataSource : this.service.dataSource
      }
    });
  }

}

