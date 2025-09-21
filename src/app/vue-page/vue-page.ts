import { Component } from '@angular/core';
import { Vue } from "../charts/vue/vue";

@Component({
  selector: 'app-vue-page',
  imports: [Vue],
  templateUrl: './vue-page.html',
  styleUrl: './vue-page.scss'
})
export class VuePage {
  stateManagementLegend = ["Build in state", "Pinia", "" ];
  stateManagementData = [{ data: [4.5, 4, 0 ], label: 'State Management' }];

  testingFrameworksLegend = ["Vitest", "Jest", "" ];
  testingFrameworkData = [{ data: [4.5, 3.5, 0 ], label: 'Testing Frameworks' }];

  e2eTestingFrameworksLegend = ["Playwright", "Cypress", "" ];
  e2eTestingFrameworkData = [{ data: [4.5, 4.25, 0], label: 'E2E Testing Frameworks' }];

  cssFrameworksLegend = ["Tailwind", "Bootstrap", "ShadCdn", "CSS/SCSS" ];
  cssFrameworkData = [{ data: [4, 3.5, 2, 3.5 ], label: 'CSS Frameworks' }];

  buildToolingLegend = ["Vite", "Webpack", "Turborepo" ];
  buildToolingData = [{ data: [5, 2.5, 1.5 ], label: 'Build tooling' }];

  otherLegend = ["Nuxt", "VitePress", "TypeScript" ];
  otherData = [{ data: [2.5, 3, 5 ], label: 'Other technology' }];

}
