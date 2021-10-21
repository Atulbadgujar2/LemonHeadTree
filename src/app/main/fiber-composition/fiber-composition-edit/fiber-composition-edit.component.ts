import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationAction } from 'app/core/constans/constants';
import { FiberCompositionRequestModel } from 'app/core/model/fiber-composition/fiber-composition-request-model';
import { FiberCompositionModel } from 'app/core/model/fiber-composition/fiber-composition.model';
import { FiberCompositionService } from 'app/core/services/fiber-composition/fiber-composition-service';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fiber-composition-edit',
  templateUrl: './fiber-composition-edit.component.html',
  styleUrls: ['./fiber-composition-edit.component.scss']
})
export class FiberCompositionEditComponent implements OnInit {

 
 //for modals button
 public actionsLayout = 'normal';

 @Output() closeEditFiberCompositionModal = new EventEmitter();

 //Input Param use to get value from  list grid component.
 @Input() onFiberCompositionId?: string;

 // contains tenant data
 FiberCompositionData: any = {};
 fiberCompositionModalData: FiberCompositionModel = new FiberCompositionModel();
 fiberCompositionRequestModelData: FiberCompositionRequestModel = new FiberCompositionRequestModel();

 submitted: boolean = false;
 // Para to pass data to parent:
 public fiberCompositionId?: string;
 //form Group tittle
 fiberCompositions: FormGroup|any
 //flag for loader
 public loadingPanelVisible = true;
 public data : any;

 constructor(private formBuilder: FormBuilder, public fiberCompositionService: FiberCompositionService,
   private toastNotificationService: ToastNotificationService,
   private router: Router, private dataSharingService: DataSharingService) { }

 ngOnInit(): void {

   
   //form function declare
   this.addFormControl();
   this.onFiberCompositionId = this.dataSharingService.sharedStringId
   //if clientid is undefined navigate to list page 
   // if (this.onFiberCompositionId == undefined) {
   //   this.router.navigateByUrl('main/sm/role');
   // }
   // else {
   //   this.getFiberCompositionDetails();

   // }
   debugger;
   this.data = this.dataSharingService.sharedObject
   this.getFiberCompositionDetails();

 
 }

 // func to update edit data by api
 public getFiberCompositionDetails() {
   // if(this.onFiberCompositionId)
   // this.FiberCompositionService.getFiberCompositionDetails(this.onFiberCompositionId).subscribe(response => {
   //   this.FiberCompositionData = response;
   //   this.setFormValue();
   // })
   this.setFormValue();
 }

 setFormValue() {
   this.fiberCompositions.patchValue({
     id: this.data.id,
     fibertype: this.data.fibertype,
     compositionPercent: this.data.compositionPercent,   
     status: this.data.status,
     remark: this.data.remark

   })
   // this.FiberCompositionModalData = this.FiberCompositionData;
   this.loadingPanelVisible = false
 }

 //form control function
 addFormControl() {
   this.fiberCompositions = this.formBuilder.group({
     id: [''],
     fibertype: [''],
     compositionPercent: [''],
     status: [''],
     remark: ['']
     
   })
 }

 // on Update data
 public updateFiberCompositionDetails() {
   debugger;
   this.submitted = true
   if (this.fiberCompositions.invalid) {
     return;
   }
   const formValue = this.fiberCompositions.value;
   this.fiberCompositionModalData.id = formValue.id;
   this.fiberCompositionModalData.fibertype = formValue.fibertype;
   this.fiberCompositionModalData.compositionPercent = formValue.compositionPercent;
   
   this.fiberCompositionRequestModelData.params = this.fiberCompositionModalData;
   this.fiberCompositionRequestModelData.role.push('admin');
   this.fiberCompositionService.updateFiberCompositionDetails(this.fiberCompositionRequestModelData).subscribe(result => {
     this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
     this.onCloseFiberComposition(true);
   })

   

  //  this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
  //    this.onCloseFiberComposition(true);
 }

 /**
*  convenience getter for easy access to form fields
* for add task code from
*/

 get formProperty() {
   return this.fiberCompositions.controls;
 }
 // get formProperty end...
 // close edit modal 
 public onCloseFiberComposition(refreshList: boolean) {
   debugger;
   let obj = { "flag": refreshList, "data":  this.fiberCompositions.value };
   this.closeEditFiberCompositionModal.emit(obj);
 }


}
