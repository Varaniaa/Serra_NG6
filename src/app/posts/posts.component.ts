import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-posts',
standalone: true,
imports: [RouterLink,CommonModule ],
templateUrl: './posts.component.html',
styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
posts: any =[];

constructor(private data: DataService) {}

ngOnInit() {
    this.posts = this.data.getPosts().then( 
    (data) => (this.posts = data)
        )
    }
}

