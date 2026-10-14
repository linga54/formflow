import { Routes } from '@angular/router';
import { ContactForm } from './contact-form/contact-form';
import { ContactTable } from './contact-table/contact-table';

export const routes: Routes = [
  { path: 'form', component: ContactForm },
  { path: 'result', component: ContactTable },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', redirectTo: 'form' },
];