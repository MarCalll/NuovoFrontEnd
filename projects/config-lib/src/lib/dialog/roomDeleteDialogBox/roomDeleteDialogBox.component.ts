import { Component, Inject, OnInit } from '@angular/core';
import { ConfigService } from '../../store/config.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'config-roomDeleteDialogBox',
  templateUrl: './roomDeleteDialogBox.component.html',
  styleUrls: ['./roomDeleteDialogBox.component.scss']
})
export class RoomDeleteDialogBoxComponent implements OnInit {

  constructor(protected service:ConfigService, public dialogRef: MatDialogRef<RoomDeleteDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSiClick(): void {
    this.dialogRef.close()
  }

}
