import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'joao-portfolio';
  headersData: any
  

  constructor(private titleService: Title, private metaService: Meta, private http: HttpClient) { }
  ngOnInit(): void {

    
    this.titleService.setTitle("Joao Paulo | Fullstack Developer");
    this.metaService.addTags([
      { name: 'keywords', content: 'Fullstack, Software Engineer, software, developer' },
      { name: 'description', content: 'Fullstack developer with proficiency in both frontend and backend technologies, enabling end-to-end solution delivery.' },
    ]);

    AOS.init();

    
  }


}
