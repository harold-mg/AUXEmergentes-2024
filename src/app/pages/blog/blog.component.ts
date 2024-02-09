import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  comments: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(comments => {
        //15 elementos sacados del json
        this.comments = comments.slice(0, 15);
      });
  }
}

