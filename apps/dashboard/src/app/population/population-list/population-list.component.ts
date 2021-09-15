import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Data } from '@us-population/api-interfaces';

@Component({
  selector: 'us-population-population-list',
  templateUrl: './population-list.component.html',
  styleUrls: ['./population-list.component.scss']
})
export class PopulationListComponent {
  @Input() datas: Data[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Output() populationViewed = new EventEmitter();
}
