import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
@Component({
  selector: 'app-questionset-list',
  templateUrl: './questionset-list.component.html',
  styleUrls: ['./questionset-list.component.scss']
})
export class QuestionsetListComponent implements OnInit {
  questionsetList: any;
  constructor(
    private router: Router,
    public navigationService: NavigationService) { }

  ngOnInit(): void {
    this.questionsetList = [
      {
        identifier: 'do_11352672140540313617'
      }
    ];
  }

  navigateToQuestionset(id): void {
    this.router.navigate(['/questionset-editor', id]);
  }

}
