import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DataServiceService } from './data-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Post } from './data.model';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [DataServiceService],
  template: `
    <h1>Hello from {{name}}!</h1>
      <ul *ngFor="let post of posts">
        <li>
        {{post.id}} {{post.title}}
        </li>
      </ul>
    
  `,
})
export class App implements OnInit {
  name = 'Angular';
  posts: Post[] = [];
  constructor(private dataServiceService: DataServiceService) {}
  ngOnInit() {
    this.dataServiceService.getData().subscribe((res) => {
      console.log(res);
      this.posts = res;
    });
  }
}

bootstrapApplication(App);
