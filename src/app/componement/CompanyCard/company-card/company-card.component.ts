import { Component } from '@angular/core';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent {

  company: any[] = [ {
    "id": 1, "name": "EY", "description": "ayo",
  },
  {
    "id": 1, "name": "EY", "description": "ayo",
  },
  {
    "id": 1, "name": "EY", "description": "ayo",
  },
  {
    "id": 1, "name": "EY", "description": "ayo",
  }];


}
