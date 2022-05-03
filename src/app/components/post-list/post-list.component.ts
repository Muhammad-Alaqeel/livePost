import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/post.model';
import { postService } from 'src/app/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
listOfPost: post[]=[];
  constructor(private postService: postService) { }

  ngOnInit(): void {

    this.listOfPost=this.postService.getListOfPost();
  }

}
