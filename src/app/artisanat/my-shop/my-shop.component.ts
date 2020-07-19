import { Component, OnInit } from '@angular/core';
import * as Chartist  from 'chartist';
import { ChartingService } from '../services/charting.service';

@Component({
  selector: 'app-my-shop',
  templateUrl: './my-shop.component.html',
  styleUrls: ['./my-shop.component.css']
})
export class MyShopComponent implements OnInit {
  cards = [{
    icon: 'attach_money',
    category: 'Revenue',
    title: '$34,245',
    secondaryIcon: 'date_range',
    secondaryText: 'Last 24 Hours'
  }, {
    icon: 'store',
    category: 'Products Sold',
    title: '34',
    secondaryIcon: 'date_range',
    secondaryText: 'Last 24 Hours'
  }, {
    icon: 'person',
    category: 'Customers',
    title: '34',
    secondaryIcon: 'date_range',
    secondaryText: 'Last 24 Hours'
  }];
  constructor(private chartingService: ChartingService) { }

  ngOnInit(): void {

    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [
        [12, 17, 7, 17, 23, 18, 38]
      ]
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    }

    var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

    this.chartingService.startAnimationForLineChart(dailySalesChart);
  }

}
