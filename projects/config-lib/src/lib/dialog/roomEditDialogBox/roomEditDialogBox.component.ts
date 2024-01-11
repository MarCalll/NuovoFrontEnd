import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConfigService } from '../../store/config.service';

@Component({
  selector: 'config-roomEditDialogBox',
  templateUrl: './roomEditDialogBox.component.html',
  styleUrls: ['./roomEditDialogBox.component.scss']
})
export class RoomEditDialogBoxComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RoomEditDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service: ConfigService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.service.getAll();
    this.dialogRef.close();
  }

  onYesClick(item:any): void {
    this.service.updateRoom_id(item,this.data.pathGetAll,this.data.contentDatabase,this.data.dataSource)
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.service.getAll();
    
  }
}
