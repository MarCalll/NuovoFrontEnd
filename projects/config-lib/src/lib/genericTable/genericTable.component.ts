import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { BedDialogBoxComponent } from '../dialog/bedDialogBox/bedDialogBox.component';

@Component({
  selector: 'config-genericTable',
  templateUrl: './genericTable.component.html',
  styleUrls: ['./genericTable.component.scss']
})
export class GenericTableComponent implements OnInit {

  constructor(private http: HttpClient,protected dialog:MatDialog) { }

  ngOnInit() {
    this.loadTableData();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  @Input() displayedColumns: string[]
  @Input() pathGetAll: string;
  @Input() actions: boolean;
  @Input() itemPerPage: number;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  contentDatabase : any[] = [];
  dataSource = new MatTableDataSource<any>();

  loadTableData() {
    this.getAll();
    if (this.actions == true) {
      this.displayedColumns.push('actions');
    }
    if (this.itemPerPage==null) {
      this.itemPerPage = 10
    }
  }

  getAll() {
    this.http.get<any[]>(this.pathGetAll).subscribe(data => {
      this.contentDatabase = data;
      this.dataSource.data = this.contentDatabase;
    });
  } 

  openBedPanel(item: any) {
    this.dialog.open(BedDialogBoxComponent, {
      width: '3000px',
      data: { id_room: item.id_room}
    });
  }

}
