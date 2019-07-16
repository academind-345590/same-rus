import { Component } from "@angular/core";

@Component({
  selector: "app-pomodoro-timer",
  templateUrl: "./pomodoro-timer.component.html",
  styleUrls: ["./pomodoro-timer.component.css"]
})
export class PomodoroTimerComponent {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  buttonLabel: string;
  
  constructor() {
    this.resetPomodoro();
    // вызов обратного отсчёта
    setInterval(()=> this.tick(), 1000);

  }
  resetPomodoro(): void {
    this.minutes = 24;
    this.seconds = 59;
	this.buttonLabel = 'Start';
	this.togglePause();
  }
  // обратный отсчёт
  private tick (): void {
	if (!this.isPaused){
		if (--this.seconds < 0) {
		  this.seconds = 59;
		  if (--this.minutes < 0) {
			this.resetPomodoro();
		  }
		}
	}
  }
  //изиеняет значение пременной id{\Paused
  togglePause(): void {
	  this.isPaused = !this.isPaused;
	  // если начат обратный отчт
	  if (this.minutes < 24 || this.seconds < 59 ) {
		  this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
	  }
  }
}
