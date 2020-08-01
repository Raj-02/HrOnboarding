

import { Component, OnInit } from '@angular/core';
import { OnboardingService } from '../../onboarding.service';

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
  selector: 'app-pre-arrival',
  templateUrl: './pre-arrival.component.html',
  styleUrls: ['./pre-arrival.component.css']
})
export class PreArrivalComponent implements OnInit {

  displayedColumns: string[] = ['name',  'PC Setup', 'Tax Paperwork'];
  dataSource = ELEMENT_DATA;
  constructor( public service: OnboardingService) { }

  ngOnInit(): void {
  }
  getRecord(name): void
  {
    alert(name);
  }

}
