import { Component } from "@angular/core";

@Component({
  selector: "pomodoro-timer",
  templateUrl: "./pomodoro-timer.component.html",
  styleUrls: ["./pomodoro-timer.component.css"]
})
export class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  constructor() {
    this.minutes = 24;
    this.seconds = 59;
  }
}
