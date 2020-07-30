import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Raj'},
  { name: 'Helium'},
  { name: 'Lithium'},
  { name: 'Beryllium' },
  { name: 'Boron' },
  { name: 'Carbon' },
  { name: 'Nitrogen' },
  { name: 'Oxygen'},
  { name: 'Fluorine'},
  { name: 'Neon'},
];
@Component({
  selector: 'app-week1',
  templateUrl: './week1.component.html',
  styleUrls: ['./week1.component.css']
})
export class Week1Component implements OnInit {

  displayedColumns: string[] = ['name',  'Security Badge', 'Company Codes'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }
  getRecord(name): void
  {
    alert(name);
  }
}
