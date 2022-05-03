import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/post.model';
import { postService } from 'src/app/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post?: post;
@Input() index: number=0;

  constructor(private postService: postService, private router: Router) { }

  ngOnInit(): void {
  }
onDelete(){

  this.postService.delete(this.index);
}
edit(){





  this.router.navigate(["/edit-post",this.index]);


}
}
