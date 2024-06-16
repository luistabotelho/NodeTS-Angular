import { KeyValuePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Category } from '@core/enums/category.enum';
import { IssueModel } from '../../models/issue.model';
import { IssueService } from '../../services/issue.service';
import { ConfirmationDialogComponent } from '../dialogs/confirmation-dialog/confirmation-dialog.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-issues',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    KeyValuePipe,
    FormsModule,
    FormComponent
  ],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css'
})
export class IssuesComponent {
  Category = Category

  constructor(
    private api: IssueService,
    private dialog: MatDialog
  ) {}

  items = this.api.$issues
  form = new IssueModel({})

  saveIssue() {
    this.api.saveIssue(this.form).subscribe({
      next: () => this.form = new IssueModel({})
    })
  }

  deleteIssue(id: string) {
    this.dialog
    .open(ConfirmationDialogComponent)
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (result) {
          this.api.deleteIssue(id).subscribe({
            next: () => console.log("Deleted"),
            error: (err: HttpErrorResponse) => console.error(err.message)
          })
        }
      }
    })
    
  }
}
