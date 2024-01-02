import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { path } from 'src/app/constants';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactData: any;

  constructor(public analyticsService: AnalyticsService, private http: HttpClient) { 
    this.http.get(path).subscribe((data: any) => {
      this.contactData = data;
    });
  }

  ngOnInit(): void {

  }
}
