import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic3',
  templateUrl: './topic3.component.html',
  styleUrls: ['./topic3.component.css']
})
export class Topic3Component implements OnInit {
  navigationExtras;
  fragment;
  constructor(private ar: ActivatedRoute) {}

  ngOnInit() {
    this.navigationExtras = this.ar.snapshot.queryParamMap['params'];
    this.fragment = this.ar.snapshot.fragment;
  }
}
