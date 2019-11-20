import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic1',
  templateUrl: './topic1.component.html',
  styleUrls: ['./topic1.component.css']
})
export class Topic1Component implements OnInit {
  year;
  city;

  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    this.year = this.ar.snapshot.paramMap.get('year');
    this.city = this.ar.snapshot.paramMap.get('city');
  }
}
