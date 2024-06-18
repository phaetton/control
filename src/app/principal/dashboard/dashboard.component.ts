import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormControl, FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterOutlet,
    FormsModule,
    MatIconModule, MatButtonModule,
    MatTableModule, MatFormFieldModule,
    MatInputModule, MatDatepickerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // Aquí instanciamos el FormGroup y definimos los controles
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      // Otros controles del formulario
    });
  }

  submitForm() {
    // Lógica para manejar la presentación del formulario
  }
}
