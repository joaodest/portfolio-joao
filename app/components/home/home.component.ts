import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private analyticsService: AnalyticsService){}

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "inicio...");
  }

}
