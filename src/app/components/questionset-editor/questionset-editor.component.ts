import { Component, OnInit } from '@angular/core';
import { questionSetEditorConfig } from './data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionset-editor',
  templateUrl: './questionset-editor.component.html',
  styleUrls: ['./questionset-editor.component.scss']
})
export class QuestionsetEditorComponent implements OnInit {

  constructor(
    public router: Router) { }
  public editorConfig: any = questionSetEditorConfig;

  ngOnInit(): void {
  }

  editorEventListener(event): any{
    if (event.action === 'backContent') {
      console.log('editor event', event);
      this.router.navigateByUrl('/');
    }
  }
}
