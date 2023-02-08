import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-action-card',
  templateUrl: './action-card.component.html',
  styleUrls: ['./action-card.component.scss']
})
export class ActionCardComponent {
  public currentGroup;

  @Input() action: any = {};

  constructor( private router: Router, private dataService: DataService  ) {
    this.currentGroup = this.dataService.getCurrentGroup();
  }
}
