import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationAction } from 'app/core/constans/constants';
import { FabricModel } from 'app/core/model/fabric/fabric.model';
import { FabricRequestModel } from 'app/core/model/fabric/fabric.request.model';
import { FabricService } from 'app/core/services/fabric/fabric.service';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fabric-edit',
  templateUrl: './fabric-edit.component.html',
  styleUrls: ['./fabric-edit.component.scss']
})
export class FabricEditComponent implements OnInit {

//for modals button
public actionsLayout = 'normal';

@Output() closeEditFabricModal = new EventEmitter();

//Input Param use to get value from  list grid component.
@Input() onFabricId?: string;

// contains tenant data
FabricData: any = {};
fabricModalData: FabricModel = new FabricModel();
fabricRequestModelData: FabricRequestModel = new FabricRequestModel();

submitted: boolean = false;
// Para to pass data to parent:
public FabricId?: string;
//form Group tittle
fabrics: FormGroup|any
//flag for loader
public loadingPanelVisible = true;
public data : any;

constructor(private formBuilder: FormBuilder, public fabricService: FabricService, private toastNotificationService: ToastNotificationService,
  private router: Router, private dataSharingService: DataSharingService) { }

ngOnInit(): void {

  
  //form function declare
  this.addFormControl();
  this.onFabricId = this.dataSharingService.sharedStringId
  //if clientid is undefined navigate to list page 
  // if (this.onFabricId == undefined) {
  //   this.router.navigateByUrl('main/sm/role');
  // }
  // else {
  //   this.getFabricDetails();

  // }
  debugger;
  this.data = this.dataSharingService.sharedObject
  this.getFabricDetails();


}

// func to update edit data by api
public getFabricDetails() {
  // if(this.onFabricId)
  // this.FabricService.getFabricDetails(this.onFabricId).subscribe(response => {
  //   this.FabricData = response;
  //   this.setFormValue();
  // })
  this.setFormValue();
}

setFormValue() {
  this.fabrics.patchValue({
    id: this.data.id,
    paramCode: this.data.paramCode,
    paramDescription: this.data.paramDescription,
    paramType: this.data.paramType,
    status: this.data.status,
    remark: this.data.remark

  })
  // this.FabricModalData = this.FabricData;
  this.loadingPanelVisible = false
}

//form control function
addFormControl() {
  this.fabrics = this.formBuilder.group({
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

// on Update data
public updateFabricDetails() {
  debugger;
  this.submitted = true
  if (this.fabrics.invalid) {
    return;
  }
  const formValue = this.fabrics.value;
  this.fabricModalData.id = formValue.id;  
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
    this.fabricService.updateFabricDetails(this.fabricRequestModelData).subscribe(result => {
    this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
    this.onCloseFabric(true);
  })

  

 //  this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
 //    this.onCloseFabric(true);
}

/**
*  convenience getter for easy access to form fields
* for add task code from
*/

get formProperty() {
  return this.fabrics.controls;
}
// get formProperty end...
// close edit modal 
public onCloseFabric(refreshList: boolean) {
  debugger;
  let obj = { "flag": refreshList, "data":  this.fabrics.value };
  this.closeEditFabricModal.emit(obj);
}
}
