import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

 const routes:Routes=[{
path:'auth',

component: AuthComponent

},
{
  path:"add-edit",
  
  component: PostEditComponent
  
  },
  {
    path:"post-list",
    
    component: PostListComponent
    
    }
    ,
    {
      path:"",
      
redirectTo:"/post-list",

pathMatch:"full"
      }
    ,
    {
      path:"edit-post/:index",
      
      component: PostEditComponent
      
      },
    ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostEditComponent,
    PostListComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
   ReactiveFormsModule,
   HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
