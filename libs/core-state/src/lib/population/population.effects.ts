import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { Data } from "@us-population/api-interfaces";
import { PopulationService } from "@us-population/core-data";
import * as DataActions from './population.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class DataEffects{
    loadData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DataActions.loadPopulation),
            fetch({
                run: (action) =>
                    this.populationService
                        .getOne(action.dataId)
                        .pipe(map((data: Data) => DataActions.loadPopulationSuccess({ data }))),
                    onError: (action, error) => DataActions.loadPopulationFailed({ error })    
            })
        ));
    loadDatas$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DataActions.loadPopulations),
            fetch({
                run: () =>
                    this.populationService
                    .getAll()
                    .pipe(
                        map((datas: Data[]) => DataActions.loadPopulationsSuccess({ datas }))
                    ),
                onError: (action, error) => DataActions.loadPopulationsFailed({ error })    
            })
        ));
    //     createData$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(DataActions.createData),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.populationService
    //                     .create(action.data)
    //                     .pipe(map((data: Data) => DataActions.createDataSuccess({ data }))),
    //                 onError: (action, error) => DataActions.createDataFailed({ error })    
    //         })
    // ));

    // updateData$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(DataActions.updateData),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.populationService
    //                     .update(action.data)
    //                     .pipe(map((data: Data) => DataActions.updateDataSuccess({ data}))),
    //                 onError: (action, error) => DataActions.updateDataFailed({ error })    
    //         })
    // ));

    // deleteData$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(DataActions.deleteData),
    //         pessimisticUpdate({
    //             run: (action) =>
    //                 this.populationService
    //                     .delete(action.data)
    //                     .pipe(
    //                         map(() => DataActions.deleteDataSuccess({ data: action.data }))
    //                     ),
    //                 onError: (action, error) => DataActions.deleteDataFailed({ error })    
    //         })
    //     ));    


    constructor(
        private actions$: Actions,
        private populationService: PopulationService
    ) {}    
}