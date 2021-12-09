import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

     //form Group tittle
     fiberType: FormGroup |any;
 

  constructor(private formBuilder: FormBuilder,) { }

  
  ngOnInit(): void {
    //form function declare
    this.addFormControl();

  }

  //form control function
  addFormControl() {
    this.fiberType = this.formBuilder.group({
      id: [''],     
      paramCode: [''],     
      paramDescription: [''],
      paramType: [''],
      status: [''],
      remark: [''],
    })
  }

}
