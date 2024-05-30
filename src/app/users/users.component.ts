import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
selector: 'app-users',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './users.component.html',
styleUrl: './users.component.scss'
})

export class UsersComponent implements OnInit{
users: any[]=[];
constructor(){}
private data:DataService = inject(DataService)
ngOnInit(): void {
this.data.getUsers().then((users) => {
this.users = users;
    })
  }
}