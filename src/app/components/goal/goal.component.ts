import { QuoteRequestService } from './../../quote-http/quote-request.service';
import { GoalService } from './../../goal-service/goal.service';
import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';
import { AlertService } from 'src/app/alert-service/alert.service';
import { HttpClient } from '@angular/common/http';
import { Quote } from 'src/app/quote-class/quote';
import { Router } from '@angular/router';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;
  quote: Quote;

  goToUrl(id) {
    this.router.navigate(['goals', id]);
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(
        `Are you sure you want to delete ${this.goals[index].name}?`
      );

      if (toDelete) {
        this.goals.splice(index, 1);
        this.alertService.alertMe('The goal has been deleted');
      }
    }
  }
  addNewGoal(goal) {
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal);
  }
  constructor(goalService: GoalService, alertService: AlertService,
              private http: HttpClient, private quoteService: QuoteRequestService, private router: Router) {
    // this.goals = goalService.getGoals();
    this.alertService = alertService;
   }

  ngOnInit(): void {
this.quoteService.quoteRequest();
this.quote = this.quoteService.quote;

interface ApiResponse {
      author: string;
      quote: string;
    }
this.http.get<ApiResponse>('http://quotes.stormconsultancy.co.uk/random.json').subscribe
    (data => {this.quote = new Quote(data.author , data.quote); }
    , err => {
      this.quote = new Quote('Winston Churchill', 'Never give up');
      console.log('An error occurred');
    });
  }
}
