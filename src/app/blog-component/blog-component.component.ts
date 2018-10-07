import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css']
})
export class BlogComponentComponent implements OnInit {
  @Input() title:string;
  @Input() content:string;
  @Input() loveIts:number;
  @Input() createdDate:Date;
  constructor() { }

  getColor(){
    if(this.loveIts>3){
      return 'green';
    }else{
      return 'red';
    }
  }

  onLike(){
    this.loveIts=this.loveIts+1;
    console.log('One more like on '+this.title+' total likes: '+this.loveIts);
  }
  
  onDislike(){
    this.loveIts=this.loveIts-1;
    console.log('One more dislike on:'+this.title+' total dislikes: '+this.loveIts);
  }

  ngOnInit() {
  }

}
