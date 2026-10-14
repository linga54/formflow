import { Component, inject } from '@angular/core'; //will get the same shared service the form saved into.
import { SubmissionService } from '../services/submission.service';

@Component({
  selector: 'app-contact-table',
  imports: [],
  templateUrl: './contact-table.html',
  styleUrl: './contact-table.css',
})
export class ContactTable {
  private submissionService = inject(SubmissionService);

  data = this.submissionService.get();
}
