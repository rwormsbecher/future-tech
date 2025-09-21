import { Component } from '@angular/core';
import { React } from "../charts/react/react";

@Component({
  selector: 'app-react-page',
  imports: [React],
  templateUrl: './react-page.html',
  styleUrl: './react-page.scss'
})
export class ReactPage {
  stateManagementLegend = ["useState", "Context Api", "Zustand", "Redux", "Jotai" ];
  stateManagementData = [{ data: [4.5, 4.5, 4, 2.5, 2.5 ], label: 'State Management' }];

  cssFrameworksLegend = ["Tailwind", "CSS Modules", "CSS / SCSS", "Styled components", "Emotion", "Shadcn/ui" ];
  cssFrameworksData = [{ data: [4.5, 2, 3, 3.25, 1.5 , 4], label: 'CSS frameworks' }];

  buildToolingLegend = ["Vite", "Webpack", "Turbopack", "Parcel" ];
  buildToolingData = [{ data: [5, 2.5, 2.5, 2.25 ], label: 'Build tooling' }];

  testingFrameworksLegend = ["Jest", "React testing library", "Vitest" ];
  testingFrameworksData = [{ data: [3.75, 3.75, 4.25], label: 'Testing frameworks' }];

  e2eTestingFrameworksLegend = ["Playwright", "Cypress", "" ];
  e2sTestingFrameworksData = [{ data: [4.5, 4.25, 0], label: 'E2E testing frameworks' }];

  othersLegend = ["React Query", "React router", "Remix router", "NextJS", "Astro", "Tanstack start" ];
  othersData = [{ data: [4, 4.75, 3, 3.75, 3.25, 3.75], label: 'Other technologies' }];
}

