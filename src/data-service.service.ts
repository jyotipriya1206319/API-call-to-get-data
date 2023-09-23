import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './data.model';

@Injectable()
export class DataServiceService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Post[]>(
      'https://my-json-server.typicode.com/typicode/demo/posts'
    );
  }
}
