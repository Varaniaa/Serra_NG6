import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit{

constructor(
    private activatedRoute: ActivatedRoute , 
    private dataService: DataService
) {
this.activatedRoute.params.subscribe(params=>{
this.postId = params?.['id'];
});
}
posts$: any;
postId: number=0;
ngOnInit(): void{
this.dataService.getPost(this.postId).then((posts) => {
    this.posts$ = posts;
        });
    }
}

