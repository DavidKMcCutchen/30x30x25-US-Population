import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopulationComponent } from './population/population.component';
import { PopulationDetailsComponent } from './population/population-details/population-details.component';
import { PopulationListComponent } from './population/population-list/population-list.component';
import { MaterialModule } from "@us-population/material";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreDataModule } from "@us-population/core-data";
import { CoreStateModule } from "@us-population/core-state";
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { EnvironmentModule } from '@us-population/environment';
import { UiLoginModule } from '@us-population/ui-login';
import { PopulationInfoComponent } from './population-sub/population-info/population-info.component';
import { PopulationSubComponent } from './population-sub/population-sub.component';


@NgModule({
  declarations: [AppComponent, PopulationComponent, PopulationDetailsComponent, PopulationListComponent, PopulationInfoComponent, PopulationSubComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    UiLoginModule,
    EnvironmentModule.withEnvironment(environment),
    FormsModule,
    ReactiveFormsModule,
    CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}