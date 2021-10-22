import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationAction } from 'app/core/constans/constants';
import { FabricModel } from 'app/core/model/fabric/fabric.model';
import { FabricRequestModel } from 'app/core/model/fabric/fabric.request.model';
import { FabricService } from 'app/core/services/fabric/fabric.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fabric-add',
  templateUrl: './fabric-add.component.html',
  styleUrls: ['./fabric-add.component.scss']
})
export class FabricAddComponent implements OnInit {

//for modals button
public actionsLayout = 'normal';
//for submit
submitted = false;
// output from parent to close Modal 
@Output() closeAddFabricModal = new EventEmitter();

@ViewChild('name') name?: ElementRef;



//form Group tittle
fabric: FormGroup |any;

fabricModalData: FabricModel = new FabricModel();
fabricRequestModelData: FabricRequestModel = new FabricRequestModel();

constructor(private formBuilder: FormBuilder, private toastNotificationService: ToastNotificationService,
 public fabricTypeService: FabricService) { }

ngAfterViewInit(): void {
  if(this.name)
  this.name.nativeElement.focus();
}


ngOnInit(): void {
  //form function declare
  this.addFormControl();

}

//form control function
addFormControl() {
  this.fabric = this.formBuilder.group({
    id: [''],  
    status: [''],
    remark: [''],   
    supplierFabricName: [''],
    color: [''],
    preTreatmentType: [''],
    supplierFabricRef: [''],
    itemCustomsCode: [''],
    fabricWidthCM: [''],
    fabricGSM: [''],
    avgRollLength: [''],
    refPriceListAttachment: [''],
    lhpFabricName: [''],
    fabricStatus: [''],
    printTechOption : ['']
   
  })
}

// on save data
public addFabric() {
  debugger;
  this.submitted = true
  if (this.fabric.invalid) {
    return;
  }
  const formValue = this.fabric.value;
 //  this.FabricModalData.id = formValue.id;
 //  this.FabricModalData.status = formValue.status;
 //  this.FabricModalData.remark = formValue.remark;
 this.fabricModalData.supplierFabricName = formValue.supplierFabricName;
 this.fabricModalData.color = formValue.color;
 this.fabricModalData.preTreatmentType = formValue.preTreatmentType;
 this.fabricModalData.supplierFabricRef = formValue.supplierFabricRef;
 this.fabricModalData.itemCustomsCode = formValue.itemCustomsCode;
 this.fabricModalData.fabricWidthCM = formValue.fabricWidthCM;
 this.fabricModalData.fabricGSM = formValue.fabricGSM;
 this.fabricModalData.avgRollLength = formValue.avgRollLength;
 this.fabricModalData.refPriceListAttachment = formValue.refPriceListAttachment;
 this.fabricModalData.lhpFabricName = formValue.lhpFabricName;
 this.fabricModalData.fabricStatus = formValue.fabricStatus;
 this.fabricModalData.printTechOption = formValue.printTechOption;  
  this.fabricRequestModelData.params = this.fabricModalData;
  this.fabricRequestModelData.role.push('admin');

  this.fabricTypeService.addFabric(this.fabricRequestModelData).subscribe(data => {
    this.toastNotificationService.success(NotificationAction.AddedSucessfully);
    this.onCloseFabric(true);
  })
 //  this.onCloseFabric(true);
}
/**
*  convenience getter for easy access to form fields
* for add task code from
*/
get formProperty() {
  return this.fabric.controls;
}
// get formProperty end...

// close add modal 
public onCloseFabric(flag: boolean) {
  const obj = {
    flag: flag,
    data: this.fabric.value
  }

  this.closeAddFabricModal.emit(obj);

}

}
