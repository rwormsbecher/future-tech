import { Component } from '@angular/core';
import { AngularComponent } from "../charts/angular/angular";

@Component({
  selector: 'app-angular-page',
  imports: [AngularComponent],
  templateUrl: './angular-page.html',
  styleUrl: './angular-page.scss'
})
export class AngularPage {

  stateManagementLegend = ["Services", "signals", "RxJs", "NgRx/NgRs", "Signal store", "Akita", "RxAngular", "Tanstack query" ];
  stateManagementData = [{ data: [3.66, 5, 3.83, 2.13, 3.66, 2, 2, 3  ], label: 'State Management' }];

  testingFrameworkLegend = [ "Jasmine/Karma", "Jest", "Spectator", "Vitest", "Angular testing Library", "Protractor", "Web test runner"];
  testingFrameworkData = [ {data: [3.75, 4.12, 3.25, 3.5, 3.66, 1, 3 ], label: "Testing Frameworks"}]

  e2eTestingFrameworkLegend = ["Cypress", "Playwright", "Testcafe", ];
  e2eTestingFrameworkData = [ {data: [3.88, 4.25, 3 ], label: "Testing Frameworks"}]


  cssFrameworksLegend = ["CSS/SCSS", "Tailwind", "Bootstrap", "Material", "CSS modules", "PrimeNg", "NgZorro" ]
  cssFrameworkData = [{data: [4.75, 4.13, 2.13, 4.75, 3, 3, 3], label: 'Styling & CSS Frameworks'}]

  buildToolingLegend = ["Vite", "Webpack", "Angular CLI", "Nx", "EsBuild"]
  buildToolsData = [{data: [4.25, 2.66, 5, 4, 3.5], label: "Build tools"}]
}
