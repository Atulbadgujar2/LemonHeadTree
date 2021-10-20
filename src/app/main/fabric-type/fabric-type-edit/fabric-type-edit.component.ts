import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationAction } from 'app/core/constans/constants';
import { RoleModel } from 'app/core/model/role/role-model';
import { RoleService } from 'app/core/services/role.service';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fabric-type-edit',
  templateUrl: './fabric-type-edit.component.html',
  styleUrls: ['./fabric-type-edit.component.scss']
})
export class FabricTypeEditComponent implements OnInit {

 //for modals button
 public actionsLayout = 'normal';

 @Output() closeEditUserRoleModal = new EventEmitter();

 //Input Param use to get value from  list grid component.
 @Input() onUserRoleId?: string;

 // contains tenant data
 userRoleData: any = {};
 public userRoleModalData: RoleModel = new RoleModel();
 submitted: boolean = false;
 // Para to pass data to parent:
 public userRoleId?: string;
 //form Group tittle
 userRoles: FormGroup|any
 //flag for loader
 public loadingPanelVisible = true;
 public data : any;

 constructor(private formBuilder: FormBuilder, public userRoleService: RoleService, private toastNotificationService: ToastNotificationService,
   private router: Router, private dataSharingService: DataSharingService) { }

 ngOnInit(): void {

   
   //form function declare
   this.addFormControl();
   this.onUserRoleId = this.dataSharingService.sharedStringId
   //if clientid is undefined navigate to list page 
   // if (this.onUserRoleId == undefined) {
   //   this.router.navigateByUrl('main/sm/role');
   // }
   // else {
   //   this.getUserRoleDetails();

   // }
   debugger;
   this.data = this.dataSharingService.sharedObject
   this.getUserRoleDetails();

 
 }

 // func to update edit data by api
 public getUserRoleDetails() {
   // if(this.onUserRoleId)
   // this.userRoleService.getUserRoleDetails(this.onUserRoleId).subscribe(response => {
   //   this.userRoleData = response;
   //   this.setFormValue();
   // })
   this.setFormValue();
 }

 setFormValue() {
   this.userRoles.patchValue({
     id: this.data.id,
     paramCode: this.data.paramCode,
     paramDescription: this.data.paramDescription,
     paramType: this.data.paramType,
     status: this.data.status,
     remark: this.data.remark

   })
   // this.userRoleModalData = this.userRoleData;
   this.loadingPanelVisible = false
 }

 //form control function
 addFormControl() {
   this.userRoles = this.formBuilder.group({
     id: [''],
     paramCode: [''],
     paramDescription: [''],
     paramType: [''],
     status: [''],
     remark: ['']
     
   })
 }

 // on Update data
 public updateUserRoleDetails() {
   // this.submitted = true
   // if (this.userRoles.invalid) {
   //   return;
   // }
   // const formValue = this.userRoles.value;
   // this.userRoleModalData.name = formValue.name;
   // this.userRoleModalData.normalizedName = formValue.normalizedName;
   // this.userRoleService.updateUserRoleDetails(this.userRoleModalData).subscribe(result => {
   //   this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
   //   this.onCloseUserRole(true);
   // })

   

   this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
     this.onCloseUserRole(true);
 }

 /**
*  convenience getter for easy access to form fields
* for add task code from
*/

 get formProperty() {
   return this.userRoles.controls;
 }
 // get formProperty end...
 // close edit modal 
 public onCloseUserRole(refreshList: boolean) {
   let obj = { "flag": false, "data":  this.userRoles.value };
   this.closeEditUserRoleModal.emit(obj);
 }

}
