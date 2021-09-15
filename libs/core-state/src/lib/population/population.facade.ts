import { Injectable } from "@angular/core";
import { Data } from "@us-population/api-interfaces";
import { Action, ActionsSubject, select, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as PopulationActions from './population.actions';
import * as PopulationSelectors from './population.selectors';
import * as fromPopulations from './population.reducer';


@Injectable({
    providedIn: 'root'
})

export class PopulationFacade {
    allPopulations$ = this.store.pipe(
        map((state) => PopulationSelectors.getAllPopulations(state)),
    )
    selectedPopulations$ = this.store.pipe(select(PopulationSelectors.getSelectedPopulation));
    loaded$ = this.store.pipe(select(PopulationSelectors.getPopulationsLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === PopulationActions.createPopulation({} as any) .type ||
        action.type === PopulationActions.updatePopulation({} as any) .type ||
        action.type === PopulationActions.deletePopulation({} as any) .type 
        ))

        selectPopulation(dataId: number) {
            this.dispatch(PopulationActions.selectPopulation({ dataId }));
        };

        loadPopulations() {
            this.dispatch(PopulationActions.loadPopulations())
        };

        loadPopulation(dataId: number) {
            this.dispatch(PopulationActions.loadPopulation({ dataId }))
        };

        savePopulation(data: Data) {
            data.Population ? this.updatePopulation(data) : this.createPopulation(data)
        };

        createPopulation(data: Data) {
            this.dispatch(PopulationActions.createPopulation({ data }))
        };

        updatePopulation(data: Data) {
            this.dispatch(PopulationActions.updatePopulation({ data }))
        };

        deletePopulation(data: Data) {
            this.dispatch(PopulationActions.deletePopulation({ data }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromPopulations.PopulationPartialState>,
            private actions$: ActionsSubject
        ) {}
}