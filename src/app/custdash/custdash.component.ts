import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  id: string;
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: 'lol', name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, id: 'lol', name: 'Helium', weight: 4.0026, symbol: 'He'},
  
];
@Component({
  selector: 'app-custdash',
  templateUrl: './custdash.component.html',
  styleUrls: ['./custdash.component.scss']
})
export class CustdashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['id', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

}
