import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { path } from 'src/app/constants';

@Component({
  selector: 'app-more-projects',
  templateUrl: './more-projects.component.html',
  styleUrls: ['./more-projects.component.scss']
})
export class MoreProjectsComponent implements OnInit {
  moreProjectsData: any;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get(path).subscribe(data => {
      this.moreProjectsData = data
    })

    this.router.events.subscribe((e) => {
      if (!(e instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  //da pra usar a mesma logica para enviar para um chat de whatsapp
  redirect(route: string, event: any) {
    const id = event.target.id;
    if(id=='demoLink' || id=='githubLink'){
      return;
    }
    window.open(route, "_blank");
  }
}