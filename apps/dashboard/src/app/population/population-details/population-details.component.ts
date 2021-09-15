import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Data } from '@us-population/api-interfaces';

@Component({
  selector: 'us-population-population-details',
  templateUrl: './population-details.component.html',
  styleUrls: ['./population-details.component.scss']
})
export class PopulationDetailsComponent {
  currentPopulation: Data;
  originalTitle: string;
  

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set data(value) {
    if (value) this.originalTitle = value.Nation;
    this.currentPopulation = {...value}
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  };

  cancel() {
    this.cancelled.emit();
  }
}
