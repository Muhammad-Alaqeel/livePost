import { Injectable } from "@angular/core";
import { post } from "./post.model";

@Injectable({providedIn: 'root'})
export class postService{
    listOfPost: post[]=[

        new post(
            'Nature',
            'Nature is a British weekly scientific journal founded and based in London, England. As a multidisciplinary publication, Nature features peer-reviewed research from a variety of academic disciplines, mainly in science and technology.',
            'https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2019/07/23090714/nature-1024x682.jpeg',
            'test@test.com',
            new Date()
          ),
          new post(
            'Hampi',
            'Hampi is an ancient village in the south Indian state of Karnataka. It’s dotted with numerous ruined temple complexes from the Vijayanagara Empire. On the south bank of the River Tungabhadra is the 7th-century Hindu Virupaksha Temple, near the revived Hampi Bazaar. A carved stone chariot stands in front of the huge Vittala Temple site. Southeast of Hampi, Daroji Bear Sanctuary is home to the Indian sloth bear.',
            'https://www.deccanherald.com/sites/dh/files/article_images/2019/03/15/Hampi-DH-1552611002.jpg',
            'test@test.com',
            new Date()
          ),
          new post(
            'Araku Valley',
            `Araku Valley is a hill station and valley region in the southeastern Indian state of Andhra Pradesh. It's surrounded by the thick forests of the Eastern Ghats mountain range. The Tribal Museum is dedicated to the area's numerous indigenous tribes, known for their traditional Dhimsa dance, and showcases traditional handicrafts.`,
            'https://vizagtourism.org.in/images/places-to-visit/header/araku-valley-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg',
            'test@test.com',
            new Date(),
            
          ),

    ];


getListOfPost(){
    return this.listOfPost;
}
delete(index: number){
    this.listOfPost.splice(index,1);
}



add(post: post){
this.listOfPost.push(post);
}


update(index: number, post: post){
    this.listOfPost[index]=post;
}


getPost(index: number){
  return this.listOfPost[index];
}
}
