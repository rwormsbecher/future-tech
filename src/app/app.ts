import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularComponent } from "./charts/angular/angular";

@Component({
  selector: 'app-root',
  imports: [ AngularComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('future-tech');

  stateManagementLegend = ["Services", "signals", "RxJs", "NgRx/NgRs", "Signal store", "Akita", "RxAngular", "Tanstack query" ];
  stateManagementData = [{ data: [3.66, 5, 3.83, 2.13, 3.66, 2, 2, 3  ], label: 'State Management' }];

  testingFrameworkLegend = ["Cypress", "Playwright", "Jasmine/Karma", "Jest", "Spectator", "Vitest", "Angular testing Library", "Testcafe", "Protractor", "Web test runner"];
  testingFrameworkData = [ {data: [3.88, 4.25, 3.75, 4.12, 3.25, 3.5, 3.66, 3, 1, 3 ], label: "Testing Frameworks"}]

  cssFrameworksLegend = ["CSS/SCSS", "Tailwind", "Bootstrap", "Material", "CSS modules", "PrimeNg", "NgZorro" ]
  cssFrameworkData = [{data: [4.75, 4.13, 2.13, 4.75, 3, 3, 3], label: 'Styling & CSS Frameworks'}]
}
