import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INestedChecklistNode } from './nested-checklist-node';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nested-checklist';

  config$: Observable<INestedChecklistNode[]>;
  
  constructor(configService: ConfigService) {
    this.config$ = configService.getChecklistConfig();
  }
}
