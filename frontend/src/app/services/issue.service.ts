import { HttpClient } from '@angular/common/http';
import { Injectable, computed, signal } from '@angular/core';
import { IIssue } from '@core/models/issue.model';
import { map, tap } from 'rxjs';
import { IssueModel } from '../models/issue.model';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  url = "http://localhost:3000"

  private issues = signal<IssueModel[]>([])
  $issues = computed(() => this.issues())

  constructor(
    private http: HttpClient
  ) {
    this.refreshIssues()
  }

  async refreshIssues() {
    let subscription = this.http.get<IIssue[]>(`${this.url}/get-issues`).pipe(
      map((itemsList) => {
        return itemsList.map(item => new IssueModel(item))
      })
    ).subscribe({
      next: (value) => {
        this.issues.set(value)
        
      },
      complete: () => {
        subscription.unsubscribe()
      }
    })
  }

  saveIssue(issue: IssueModel) {
    return this.http.post(`${this.url}/save-issue`, issue).pipe(
      tap({
        next: () => this.refreshIssues()
      })
    )
  }

  deleteIssue(id: string) {
    return this.http.delete(`${this.url}/delete-issue`, {
      params: {
        id
      }
    }).pipe(
      tap({
        next: () => this.refreshIssues()
      })
    )
  }
}
