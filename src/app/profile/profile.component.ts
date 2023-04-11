import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  events:any []=[
    {
      status:"hello"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
