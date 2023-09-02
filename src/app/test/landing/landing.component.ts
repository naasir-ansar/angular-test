import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../../../json-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  headerTitle: string = '';
  headerText: string = '';
  footerText: string = '';

  constructor() {}

  ngOnInit() {}

  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
