import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {

  public dataSource: any[] = [];
  public displayedColumns: string[] = ['id', 'userid', 'title'];
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe(posts => {
      this.dataSource = posts;
    })
  }

  onClick(rowData) {
    this.router.navigate(['/post/'+ rowData.id]);
  }
}
