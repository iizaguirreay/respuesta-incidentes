import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-family-view',
  templateUrl: './family-view.component.html',
  styleUrls: ['./family-view.component.scss']
})
export class FamilyViewComponent {

  grupos;

  constructor( private router: Router, private dataService: DataService  ) {
    this.grupos = this.dataService.getGrupos();
  }


  goToAction(grupo: any){
    this.dataService.setGroupId(grupo.id);
    this.dataService.setActions();
    this.router.navigate(['/actions']);
  }



}
