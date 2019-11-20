import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topic2',
  templateUrl: './topic2.component.html',
  styleUrls: ['./topic2.component.css']
})
export class Topic2Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigationHandler() {
    this.router.navigate(['/topic1', '2018', 'Mumbai'], {
      queryParams: {
        from: 'India',
        limit: 50
      },
      fragment: 'FragmentIsHere'
    });
  }
}
