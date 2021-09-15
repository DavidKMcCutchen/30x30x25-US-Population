import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Data, emptyData } from '@us-population/api-interfaces';
import { PopulationFacade } from '@us-population/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'us-population-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})
export class PopulationComponent implements OnInit {
  allPopulations$: Observable<Data[]> = this.populationFacade.allPopulations$;
  selectedPopulation$: Observable<Data> = this.populationFacade.selectedPopulations$;

  form: FormGroup;

  constructor(
    private populationFacade: PopulationFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.populationFacade.mutations$.subscribe((_) => this.resetPopulation());
  }

  ngOnInit() {
    this.initForm();
    this.populationFacade.loadPopulations();
    this.resetPopulation()

    const populationRouteId = this.route.snapshot.params['id'];

    if (populationRouteId) {
      this.loadPopulation((populationRouteId))
    }
  }

  viewPopulation(dataId: string) {
    this.router.navigate(["populations", dataId])
  }

  loadPopulation(dataId: number) {
    this.populationFacade.selectPopulation(dataId);
    this.populationFacade.loadPopulation(dataId);
  }

  selectPopulation(data: Data) {
    this.populationFacade.selectPopulation(data.Population)
    this.form.patchValue(data);
  }

  savePopulation(data: Data) {
    this.populationFacade.savePopulation(data);
  }

  deletePopulation(data: Data) {
    this.populationFacade.deletePopulation(data);
  }

  resetPopulation() {
    this.form.reset();
    this.selectPopulation(emptyData)
  }

  private initForm() {
    this.form = this.formBuilder.group({
      "ID Nation": [''],
      Nation: [''],
      "ID Year": [null],
      Year: [''],
      Population: [null],
      "Slug Nation": ['']
    })
  }
}
