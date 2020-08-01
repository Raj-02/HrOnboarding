
import { Observable } from 'rxjs/internal/Observable';
import { OnboardingService } from './../../Shared/onboarding.service';
import { Component, OnInit } from '@angular/core';
import {  DataTX, DataPC } from 'src/app/Shared/on-boarding.model';
import { HttpClient  } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    pcData: DataPC;
    txData: DataTX;
  constructor( public service: OnboardingService, private http: HttpClient ) { }


  onTxApprove(){
    this.service.Datatx = new DataTX();
    this.service.Datatx.Name = 'Test';
    this.service.Datatx.Tax_Paperwork1 = 'approved';

    this.service.txArrival(this.service.Datatx).subscribe(
      data => {
        this.txData = data;
      }
    )
  }
  onPcApprove(){
    this.service.Datapc = new DataPC();
    this.service.Datapc.Name = 'Test';
    this.service.Datapc.PC_Setup1 = 'approved';
    this.service.PcArrival(this.service.Datapc).subscribe(
      data => {
        this.pcData = data; }
    )
    this.service.GetPc();
  }


  ngOnInit(): void {
    this.service.GetPc();
    this.service.GetTx();
  }

}
