import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/goal';
import { AlertService } from 'src/app/alert-service/alert.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  alertService: AlertService;

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
  constructor(alertService: AlertService) {
    this.alertService = alertService;
   }

  ngOnInit(): void {
  }

}
