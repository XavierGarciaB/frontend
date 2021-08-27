import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { ResenasComponent } from './resenas.component';

@Component({
  selector: 'app-resenas-dialog',
  templateUrl: './resenasDialog.component.html',
  styleUrls: ['./resenasDialog.component.css'],
})

export class ResenasDialogComponent{
  constructor(
    public dialogRef: MatDialogRef<ResenasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
    
}