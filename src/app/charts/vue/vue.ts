import { Component, Input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-vue',
  imports: [BaseChartDirective],
  templateUrl: './vue.html',
  styleUrl: './vue.scss'
})
export class Vue {
  public radarChartOptions: ChartConfiguration<'radar'>['options'] = {
    responsive: true,
    maintainAspectRatio: true, 
    aspectRatio: 1,   
    backgroundColor: 'rgba(0, 122, 255, 0.4)',
    borderColor: '#007AFF',           
    scales: {
      
      r: {
        min: 0,           
      max: 5,    
        pointLabels: {
          font: { size: 18 },
          color: '#333'
        },
        ticks: {
          font: {size: 18},
          stepSize: 1,        
          callback: (value) => value, 
          color: '#333'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: { size: 16 }
        }
      }
    }
  };

  

  @Input() radarChartLabels: string[] = [];

  @Input() radarChartDatasets: ChartConfiguration<'radar'>['data']['datasets'] = [];
}

