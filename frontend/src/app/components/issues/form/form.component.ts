import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { IssueModel } from '../../../models/issue.model';
import { Category } from '@core/enums/category.enum';
import { KeyValuePipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    KeyValuePipe
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  Category = Category

  @Input() form: IssueModel = new IssueModel({})
  @Output() formChange = new EventEmitter<IssueModel>()
  @Output() formSaved = new EventEmitter<void>()
}
