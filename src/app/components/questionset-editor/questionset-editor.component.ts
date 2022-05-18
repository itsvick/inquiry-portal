import { Component, OnInit } from '@angular/core';
import { questionSetEditorConfig } from './data';

@Component({
  selector: 'app-questionset-editor',
  templateUrl: './questionset-editor.component.html',
  styleUrls: ['./questionset-editor.component.scss']
})
export class QuestionsetEditorComponent implements OnInit {

  constructor() { }
  public editorConfig: any = questionSetEditorConfig;

  ngOnInit(): void {
  }

}
