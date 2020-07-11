import { Component, OnInit } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
