import { Injectable } from '@angular/core';
import { Goal } from '../goal';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor() { }
  getGoals(): Goal[] {
    return [
      new Goal(1, 'Watch Finding Nemo', 'Find where the film is streaming and find out if Merlin finds his son', new Date(2020, 2, 25)),
      new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot', new Date(2012, 12, 3)),
      new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon', new Date(2010, 2, 3)),
      new Goal(4, 'Get Dog Food', 'Pupper likes expensive snacks', new Date(2020, 3, 2)),
      new Goal(5, 'Solve math homework', 'Damn Math', new Date(2009, 6, 10)),
      new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord', new Date(2008, 8, 3)),
    ];
    }
  }

