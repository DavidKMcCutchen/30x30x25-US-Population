import { emptyData } from "@us-population/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { populationAdapter, PopulationState, POPULATION_FEATURE_KEY } from "./population.reducer";

export const getPopulationState = createFeatureSelector<PopulationState>(POPULATION_FEATURE_KEY);

const { selectAll, selectEntities } = populationAdapter.getSelectors();

export const getPopulationsLoaded = createSelector(
    getPopulationState,
    (state: PopulationState) => state.loaded
);

export const getPopulationError = createSelector(
    getPopulationState,
    (state: PopulationState) => state.error
);

export const getAllPopulations = createSelector(
    getPopulationState,
    (state: PopulationState) => selectAll(state)
);

export const getPopulationEntities = createSelector(
    getPopulationState,
    (state: PopulationState) => selectEntities(state)
);

export const getSelectedPopulationId = createSelector(
    getPopulationState,
    (state: PopulationState) => state.selectedId
);

export const getSelectedPopulation = createSelector(
    getPopulationEntities,
    getSelectedPopulationId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyData
);