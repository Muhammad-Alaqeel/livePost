import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { post } from 'src/app/post.model';
import { postService } from 'src/app/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
form!: FormGroup;
editMode:boolean=false;

par:number=601;

  constructor(private postService:postService, private router: Router, private route: ActivatedRoute) { }




  ngOnInit(): void {
    
    let title:string='';
    let desc:string='';
    let imgPath:string='';
    this.route.params.subscribe((params: Params)=>{
if(params['index']){
  this.par=params['index'];
  this.editMode=true;
  const currentPost=this.postService.getPost(params['index']);
  title=currentPost.title;

  desc=currentPost.desc;

  imgPath=currentPost.imgPath;

}

    });
    this.form= new FormGroup({
      title:new FormControl(title,[Validators.required]),
      desc:new FormControl(desc,[Validators.required]),
      imgPath:new FormControl(imgPath,[Validators.required]),
    });
  

   
  }

  add(){
    const title=this.form.value.title;
    const desc=this.form.value.desc;
    const imgPath=this.form.value.imgPath;



    if(this.editMode){
      this.postService.update(this.par,new post(title,desc,imgPath,"ana",new Date()))
    }
    else{
this.postService.add(new post(title,desc,imgPath,"ana",new Date()))}

this.router.navigate(["/post-list"]);
  }

}