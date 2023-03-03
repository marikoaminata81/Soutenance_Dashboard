import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-commandes',
  templateUrl: './liste-commandes.page.html',
  styleUrls: ['./liste-commandes.page.scss'],
})
export class ListeCommandesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Back(): void {
    window.history.back()
  }
}
