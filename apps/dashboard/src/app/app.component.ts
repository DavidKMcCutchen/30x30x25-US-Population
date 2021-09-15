import { Component } from '@angular/core';


@Component({
  selector: 'us-population-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Population Data';
  links= [
    {path: '', icon: 'home', title: 'Home'},
    {path: 'api/data?drilldowns=Nation&measures=Population', icon: 'view_list', title: 'Population'}
  ]
}
