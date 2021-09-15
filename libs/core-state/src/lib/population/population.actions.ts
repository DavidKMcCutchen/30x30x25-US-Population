import { createAction, props } from "@ngrx/store";
import {  Data } from "@us-population/api-interfaces";

// Select Entity

export const selectPopulation = createAction(
    '[DATA] Select Population',
    props<{ dataId: number }>()
);

// Load all Entities

export const loadPopulations = createAction(
    '[DATA] Load Populations'
);

export const loadPopulationsSuccess = createAction(
    '[DATA] Load Populations Success',
    props<{ datas: Data[]}>()
);

export const loadPopulationsFailed = createAction(
    '[DATA] Load Populations Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadPopulation = createAction(
    '[DATA] Load Population',
    props<{ dataId: number}>()
);

export const loadPopulationSuccess = createAction(
    '[DATA] Load Population Success',
    props<{ data: Data}>()
);

export const loadPopulationFailed = createAction(
    '[DATA] Load Population Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createPopulation = createAction(
    '[DATA] Create Population',
    props<{ data: Data}>()
);

export const createPopulationSuccess = createAction(
    '[DATA] Create Population Success',
    props<{ data: Data}>()
);

export const createPopulationFailed = createAction(
    '[DATA] Create Population Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updatePopulation = createAction(
    '[DATA] Update Population',
    props<{ data: Data}>()
);

export const updatePopulationSuccess = createAction(
    '[DATA] Update Population Success',
    props<{ data: Data}>()
);

export const updatePopulationFailed = createAction(
    '[DATA] Create Population Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deletePopulation = createAction(
    '[DATA] Delete Population',
    props<{ data: Data}>()
);

export const deletePopulationSuccess = createAction(
    '[DATA] Delete Population Success',
    props<{ data: Data}>()
);

export const deletePopulationFailed = createAction(
    '[DATA] Create Population Failed',
    props<{ error: any}>()
);