import { GoalService } from './../../goal-service/goal.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from 'src/app/goal';
import { ActivatedRoute , ParamMap } from '@angular/router';


@Component({
  selector: 'app-goal-details',
  templateUrl: './goal-details.component.html',
  styleUrls: ['./goal-details.component.css']
})
export class GoalDetailsComponent implements OnInit {
  @Input() goal: Goal;
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor(private route: ActivatedRoute, private service: GoalService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    // this.goal = this.service.getGoal(id);
  }

}
