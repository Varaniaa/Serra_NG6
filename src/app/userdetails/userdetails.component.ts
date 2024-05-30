import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
selector: 'app-userdetails',
standalone: true,
imports: [],
templateUrl: './userdetails.component.html',
styleUrl: './userdetails.component.scss'
})
export class UserdetailsComponent {
constructor(
    private activatedRoute: ActivatedRoute , 
    private dataService: DataService
) {
this.activatedRoute.params.subscribe(params=>{
this.userId = params?.['id'];
});
}
users$: any;
userId: number=0;
ngOnInit(): void{
this.dataService.getUser(this.userId).then((users) => {
    this.users$ = users;
        });
    }
}