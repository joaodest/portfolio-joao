import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations'
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';
import { path } from 'src/app/constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger("animateMenu", [
      transition(":enter", [
        query("*", [
          style({ opacity: 0, transform: "translateY(-50%)" }),
          stagger(50, [
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({ opacity: 1, transform: "none" }))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  headersData: any;

  responsiveMenuVisible: Boolean = false;
  pageYPosition!: number;

  constructor(private router: Router, public analyticsService: AnalyticsService, private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get(path).subscribe((data: any) => {
      this.headersData = data;
    });
  }

  scroll(el: any) {
    if (document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home']).then(() => document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' }));
    }
    this.responsiveMenuVisible = false;
  }


  downloadCV() {
    let url = window.location.href; // Replace with the actual file URL

    window.open(url + "/../assets/" + "JoaoPauloDiasEstevao_CV.pdf", "_blank");
  }
}
