import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material';
import {ThemePalette} from '@angular/material/typings/esm5/core';
import {DatePipe} from '@angular/common';

export interface Workout {
  color: string;
  cols: number;
  rows: number;
  title: string;
  objective: number;
}

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css'],
  providers: [DatePipe]
})
export class TrackerComponent implements OnInit {

  workouts;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  currentDate = new Date();
  dateText;

  //@ViewChild('valueInput')private _valueInput: ElementRef;


  constructor(private datePipe: DatePipe) {
    this.dateText = this.datePipe.transform(this.currentDate, 'dd/MM/yyyy');
  }

  ngOnInit() {
    this.workouts = [
      {title: 'Squats', cols: 2, rows: 1, color: 'lightpink', objective: 300, currentStatus: 0, valueInput: ''},
      {title: 'Pushups', cols: 2, rows: 1, color: 'lightpink', objective: 200, currentStatus: 0, valueInput: ''},
      {title: 'Pullups', cols: 2, rows: 1, color: 'lightpink', objective: 100, currentStatus: 0, valueInput: ''},
      {title: '1st run', cols: 3, rows: 1, color: 'lightpink', objective: 1, currentStatus: 0, valueInput: ''},
      {title: '2nd run', cols: 3, rows: 1, color: 'lightpink', objective: 1, currentStatus: 0, valueInput: ''},
    ];
  }

  /**
   * Update the current progression of a workout
   *
   * @param titleWorkout -> Targeted workout to update, name must be exactly the same as the title on the array
   * @param input -> Number to increment in the training
   */
  updateWorkout(titleWorkout: string, input: number) {

    // We increment / decrement the targeted workout
    let i = 0;
    for (i = 0; i < this.workouts.length; i++) {
      if (this.workouts[i].title === titleWorkout) {
          this.workouts[i].currentStatus += input;
          this.workouts[i]._valueInput = '';
          break;
      }
    }
    // We check if we're not getting to high or too low and ackground color's changing if we finished !
    if (this.workouts[i].currentStatus >= this.workouts[i].objective) {
      this.workouts[i].currentStatus = this.workouts[i].objective;
      this.workouts[i].color = 'lightgreen';
    } else if (this.workouts[i].currentStatus < 0) {
      this.workouts[i].currentStatus = 0;
      this.workouts[i].color = 'lightpink';
    } else {
      this.workouts[i].color = 'grey';
    }
  }

  progressBarValue(titleWorkout: string) {
    for (let i = 0; i < this.workouts.length; i++) {
      if (this.workouts[i].title === titleWorkout) {
        return (this.workouts[i].currentStatus / this.workouts[i].objective) * 100;
      }
    }
  }

  keyPressed(event: any, value: number, title: string) {
    if (event.key === 'Enter') {
      this.updateWorkout(title, value);
    }
  }
}
