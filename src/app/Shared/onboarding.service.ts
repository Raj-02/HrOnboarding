import {  DataPC, DataTX } from './on-boarding.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  Datapc: DataPC;
  Datatx: DataTX;
  listpc: DataPC[];
  listtx: DataTX[];
  readonly rootURLTxn = 'https://localhost:44355/api/Tax_Paperwork';
  readonly rootURLPc = 'https://localhost:44355/api/PC_Setup';

  constructor(public http: HttpClient) { }


  GetTx(): void {
     this.http.get(this.rootURLTxn).subscribe(res => this.listtx = res as DataTX[]);
  }
  GetPc(): void {
    this.http.get(this.rootURLPc).subscribe(res => this.listpc = res as DataPC[]);
 }

  PcArrival(Datapc: DataPC): Observable<any> {
return this.http.put('https://localhost:44355/api/PC_Setup/Test', Datapc);
  }

  txArrival(Datatx: DataTX): Observable<any> {
    return this.http.put('https://localhost:44355/api/Tax_Paperwork/Test', Datatx);
      }



}
