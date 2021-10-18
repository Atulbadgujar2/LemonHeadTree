import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable()
export class DataSharingService {
  sharedId?: number;  
  sharedStringId?: string;  
  inputFlag?: boolean; 
  REPORT_RUN_GUID? : string;
  reportName? : string;
  sharedObject: any = {}
  SharingData: Subject<any> = new Subject<any>();
  ModuleOneSub: Subject<any> = new Subject<any>();
  ModuleTwoSub: Subject<any> = new Subject<any>();
  counter = 1;
  count!: BehaviorSubject<number>;
  constructur() {
    this.count = new BehaviorSubject(this.counter);
   }

   nextCount() {
    this.count.next(++this.counter);
}

}
