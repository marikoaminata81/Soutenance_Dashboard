import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-video',
  templateUrl: './liste-video.page.html',
  styleUrls: ['./liste-video.page.scss'],
})
export class ListeVideoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Back(): void {
    window.history.back()
  }
}
