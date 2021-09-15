import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { POPULATION_ENVIRONMENT } from './population.token';
import { PopulationEnvironment } from "./population.model";


@NgModule({})
export class EnvironmentModule {
  static withEnvironment(environment: PopulationEnvironment): ModuleWithProviders<EnvironmentModule> {
    return {
      ngModule: EnvironmentModule,
      providers: [
        {
          provide: POPULATION_ENVIRONMENT,
          useValue: environment
        }
      ]
    }
  }
}
