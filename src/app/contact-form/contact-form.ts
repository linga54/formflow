import { Component, inject } from '@angular/core'; //gives us access to the router so then after we can navigate from code
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubmissionService } from '../services/submission.service';
import { UserData } from '../models/user-data';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private submissionService = inject(SubmissionService);

  userForm = this.fb.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.pattern(/^[1-9]\d{2}[1-9]\d{6}$/)],
    email: ['', Validators.email],
  });

  get firstName() {
    return this.userForm.controls.firstName;
  }
  get lastName() {
    return this.userForm.controls.lastName;
  }
  get phone() {
    return this.userForm.controls.phone;
  }
  get email() {
    return this.userForm.controls.email;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const data: UserData = this.userForm.getRawValue();
    this.submissionService.save(data); //stores the data for the next page
    this.router.navigate(['/result']).then(() => {});
  }
}
