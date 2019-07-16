import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
      AppComponent,
      PomodoroTimerComponent,
      NavbarComponent,
  ],
  imports: [BrowserModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
