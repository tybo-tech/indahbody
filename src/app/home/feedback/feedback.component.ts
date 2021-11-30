import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  @Input() message;
  @Input() routeTo;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ok() {
    if (this.router)
      this.router.navigate([`/${this.routeTo}`]);
    else
      this.message = null;
  }

}
