import { ActionReducerMap } from "@ngrx/store";
import * as fromPlanets from './population/population.reducer';

export interface AppState {
    [fromPlanets.POPULATION_FEATURE_KEY]: fromPlanets.PopulationState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromPlanets.POPULATION_FEATURE_KEY]: fromPlanets.populationReducer
};