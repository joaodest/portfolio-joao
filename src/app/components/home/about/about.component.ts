import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { path } from 'src/app/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutData: any;

  constructor(private http: HttpClient){ }
  
  ngOnInit(): void {
    this.http.get(path).subscribe(data => {
      this.aboutData = data;
    })

  }

}
