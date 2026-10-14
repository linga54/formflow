import { Injectable } from '@angular/core';
import { UserData } from '../models/user-data';

@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  private submittedData: UserData | null = null;

  save(data: UserData): void {
    this.submittedData = data;
  }

  get(): UserData | null {
    return this.submittedData;
  }
}