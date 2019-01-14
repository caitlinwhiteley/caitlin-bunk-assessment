// Default imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Componenets
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { QuizComponent } from './quiz/quiz.component';
import { FootballComponent } from './football/football.component';

// Extras
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    QuizComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "", component: HomeComponent},
      {path: "weather", component: WeatherComponent},
      {path: "quiz", component: QuizComponent},
      {path: "football", component: FootballComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
