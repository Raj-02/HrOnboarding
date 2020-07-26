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
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns: string[] = ['name', 'Company Codes', 'Security Badge', 'PC Setup', 'Tax Paperwork'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

  getRecord(name): void
  {
    alert(name);
  }

}
