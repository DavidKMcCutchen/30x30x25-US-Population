import { Data } from "@us-population/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PopulationActions from './population.actions';

export const POPULATION_FEATURE_KEY = 'datas';

export interface PopulationState extends EntityState<Data> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface PopulationPartialState {
    readonly [POPULATION_FEATURE_KEY]: PopulationState
};

export const populationAdapter: EntityAdapter<Data> = createEntityAdapter<Data>({selectId: (p) => p.Population  });

export const initialPopulationState: PopulationState = populationAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state, { error }): PopulationState => ({ ...state, error});

const onDispatch = (state, action): PopulationState => ({
    ...state,
    loaded: false,
    error: null
});

const _populationReducer = createReducer(
    initialPopulationState,
    on(
        PopulationActions.loadPopulationFailed,
        PopulationActions.loadPopulationsFailed,
        PopulationActions.createPopulationFailed,
        PopulationActions.updatePopulationFailed,
        PopulationActions.deletePopulationFailed,
        onFailed
    ),
    on(
        PopulationActions.loadPopulation,
        PopulationActions.loadPopulations,
        PopulationActions.createPopulation,
        PopulationActions.updatePopulation,
        PopulationActions.deletePopulation,
        onDispatch
    ),
    on(
        PopulationActions.loadPopulationSuccess, (state, { data }) =>
        populationAdapter.upsertOne(data, {...state, loaded: true})
    ),
    on(
        PopulationActions.selectPopulation, (state, { dataId }) => ({
            ...state,
            selectedId: dataId
        })
    ),
    on(
        PopulationActions.loadPopulationsSuccess, (state, { datas }) =>
        populationAdapter.setAll(datas, {...state, loaded: true})
    ),
    on(
        PopulationActions.deletePopulationSuccess, (state, { data }) =>
        populationAdapter.removeOne(data.Population, {...state, loaded: true})
    ),
    on(
        PopulationActions.updatePopulationSuccess, (state, { data }) =>
        populationAdapter.updateOne(
            {id: data.Population, changes: data},
            {...state, loaded: true}
        )
    ),
    on(
        PopulationActions.createPopulationSuccess, (state, {data }) =>
        populationAdapter.addOne(data, {...state, loaded: true})
    ),
)

export function populationReducer(
    state: PopulationState | undefined,
    action: Action
) {
    return _populationReducer(state, action)
}