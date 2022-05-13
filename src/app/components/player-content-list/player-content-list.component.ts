import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleContentList } from './sample-content-list';

@Component({
  selector: 'app-player-content-list',
  templateUrl: './player-content-list.component.html',
  styleUrls: ['./player-content-list.component.scss']
})
export class PlayerContentListComponent implements OnInit {

  contentList = SampleContentList;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  playContent(content) {
    this.router.navigate(['/player', content.id]);
  }

}
