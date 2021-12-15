import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  // output from parent to close Modal 
@Output() closeViewOrderModal = new EventEmitter();


//orderView
orderView: FormGroup |any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addFormControl();
  }

   //form control function
   addFormControl() {
    this.orderView = this.formBuilder.group({
      id: [''],     
      paramCode: [''],     
      paramDescription: [''],
      paramType: [''],
      status: [''],
      remark: [''],
    })
  }

  /**
*  convenience getter for easy access to form fields
* for view from
*/
get formProperty() {
  return this.orderView.controls;
}
// get formProperty end...

// close view modal 
public onCloseOrder(flag: boolean) {
  const obj = {
    flag: flag,
    // data: this.orderView.value
    data: null
  }

  this.closeViewOrderModal.emit(obj);

}



}
