import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'config-bedDialogBox',
  templateUrl: './bedDialogBox.component.html',
  styleUrls: ['./bedDialogBox.component.scss']
})
export class BedDialogBoxComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BedDialogBoxComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  idStanza : number

  ngOnInit() {
    this.idStanza = this.data.id_room
  }

}
