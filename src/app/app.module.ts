import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalFormComponent } from './components/goal-form/goal-form.component';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDetailsComponent } from './components/goal-details/goal-details.component';
import { DateCountPipe } from './date-count.pipe';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    GoalFormComponent,
    GoalComponent,
    GoalDetailsComponent,
    DateCountPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
