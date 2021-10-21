import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationAction } from 'app/core/constans/constants';
import { FiberTypeModel } from 'app/core/model/fiber-type/fiber-type-model';
import { FiberTypeRequestModel } from 'app/core/model/fiber-type/fiber-type-request.model';
import { RoleModel } from 'app/core/model/role/role-model';
import { FiberTypeService } from 'app/core/services/fiber-type/fiber-type-service';
import { RoleService } from 'app/core/services/role.service';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fiber-type-edit',
  templateUrl: './fiber-type-edit.component.html',
  styleUrls: ['./fiber-type-edit.component.scss']
})
export class FiberTypeEditComponent implements OnInit {

 //for modals button
 public actionsLayout = 'normal';

 @Output() closeEditFiberTypeModal = new EventEmitter();

 //Input Param use to get value from  list grid component.
 @Input() onfiberTypeId?: string;

 // contains tenant data
 fiberTypeData: any = {};
 fiberTypeModalData: FiberTypeModel = new FiberTypeModel();
 fiberTypeRequestModelData: FiberTypeRequestModel = new FiberTypeRequestModel();

 submitted: boolean = false;
 // Para to pass data to parent:
 public fiberTypeId?: string;
 //form Group tittle
 fiberTypes: FormGroup|any
 //flag for loader
 public loadingPanelVisible = true;
 public data : any;

 constructor(private formBuilder: FormBuilder, public fiberTypeService: FiberTypeService, private toastNotificationService: ToastNotificationService,
   private router: Router, private dataSharingService: DataSharingService) { }

 ngOnInit(): void {

   
   //form function declare
   this.addFormControl();
   this.onfiberTypeId = this.dataSharingService.sharedStringId
   //if clientid is undefined navigate to list page 
   // if (this.onfiberTypeId == undefined) {
   //   this.router.navigateByUrl('main/sm/role');
   // }
   // else {
   //   this.getfiberTypeDetails();

   // }
   debugger;
   this.data = this.dataSharingService.sharedObject
   this.getfiberTypeDetails();

 
 }

 // func to update edit data by api
 public getfiberTypeDetails() {
   // if(this.onfiberTypeId)
   // this.fiberTypeService.getfiberTypeDetails(this.onfiberTypeId).subscribe(response => {
   //   this.fiberTypeData = response;
   //   this.setFormValue();
   // })
   this.setFormValue();
 }

 setFormValue() {
   this.fiberTypes.patchValue({
     id: this.data.id,
     paramCode: this.data.paramCode,
     paramDescription: this.data.paramDescription,
     paramType: this.data.paramType,
     status: this.data.status,
     remark: this.data.remark

   })
   // this.fiberTypeModalData = this.fiberTypeData;
   this.loadingPanelVisible = false
 }

 //form control function
 addFormControl() {
   this.fiberTypes = this.formBuilder.group({
     id: [''],
     paramCode: [''],
     paramDescription: [''],
     paramType: [''],
     status: [''],
     remark: ['']
     
   })
 }

 // on Update data
 public updateFiberTypeDetails() {
   debugger;
   this.submitted = true
   if (this.fiberTypes.invalid) {
     return;
   }
   const formValue = this.fiberTypes.value;
   this.fiberTypeModalData.id = formValue.id;
   this.fiberTypeModalData.paramCode = formValue.paramCode;
   this.fiberTypeModalData.paramDescription = formValue.paramDescription;
   this.fiberTypeModalData.paramType = formValue.paramType;    
   this.fiberTypeRequestModelData.params = this.fiberTypeModalData;
   this.fiberTypeRequestModelData.role.push('admin');
   this.fiberTypeService.updateFiberTypeDetails(this.fiberTypeRequestModelData).subscribe(result => {
     this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
     this.onCloseFiberType(true);
   })

   

  //  this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
  //    this.onCloseFiberType(true);
 }

 /**
*  convenience getter for easy access to form fields
* for add task code from
*/

 get formProperty() {
   return this.fiberTypes.controls;
 }
 // get formProperty end...
 // close edit modal 
 public onCloseFiberType(refreshList: boolean) {
   debugger;
   let obj = { "flag": refreshList, "data":  this.fiberTypes.value };
   this.closeEditFiberTypeModal.emit(obj);
 }

}