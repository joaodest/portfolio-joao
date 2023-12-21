import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { path } from 'src/app/constants';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  jobsData: any;
 
  active = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(path).subscribe(data => {
      this.jobsData = data
    })
  }

}
