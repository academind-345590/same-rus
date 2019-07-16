import { Component } from "@angular/core";

@Component({
  selector: "app-pomodoro-timer",
  templateUrl: "./pomodoro-timer.component.html",
  styleUrls: ["./pomodoro-timer.component.css"]
})
export class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  constructor() {
    this.minutes = 24;
    this.seconds = 59;
    // вызов обратного отсчёта
    setInterval(()=> this.tick(), 1000);

  }
  resetPomodoro(): void {
    
  }
  // обратный отсчёт
  private tick (): void {
    if (--this.seconds < 1) {
      this.seconds = 59;
      if (--this.minutes) {
        this.minutes = 24;
        this.seconds = 59;
      }
    }
  }
}
