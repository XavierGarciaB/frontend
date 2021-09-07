import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ResenasComponent } from '../resenas.component';

@Component({
  selector: 'app-resena-comment',
  templateUrl: './resena-comment.component.html',
  styleUrls: ['./resena-comment.component.css']
})
export class ResenaCommentComponent implements OnInit {
  mensaje = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<ResenasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveResena(): void {
    this.dialogRef.close(this.mensaje.value);
  }

}
