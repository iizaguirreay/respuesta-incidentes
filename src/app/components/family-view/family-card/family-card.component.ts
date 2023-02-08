import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-family-card',
  templateUrl: './family-card.component.html',
  styleUrls: ['./family-card.component.scss']
})
export class FamilyCardComponent {
  @Input() grupo: any = {};

  ngOnInit() {
    console.log(this.grupo);
  }
}
