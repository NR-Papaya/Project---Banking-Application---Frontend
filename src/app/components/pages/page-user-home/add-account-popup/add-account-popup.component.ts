import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
  

@Component({
  selector: 'app-add-account-popup',
  templateUrl: './add-account-popup.component.html',
  styleUrls: ['./add-account-popup.component.css']
})
export class AddAccountPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddAccountPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
