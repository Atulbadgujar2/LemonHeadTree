import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationAction } from 'app/core/constans/constants';
import { RoleModel } from 'app/core/model/role/role-model';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fabricadd',
  templateUrl: './fabricadd.component.html',
  styleUrls: ['./fabricadd.component.scss']
})
export class FabricaddComponent implements OnInit {

   //for modals button
   public actionsLayout = 'normal';
   //for submit
   submitted = false;
   // output from parent to close Modal 
   @Output() closeAddUserRoleModal = new EventEmitter();
 
   @ViewChild('name') name?: ElementRef;
 
 
 
   //form Group tittle
   userRole: FormGroup |any;
 
   userRoleModalData: RoleModel = new RoleModel();
 
   constructor(private formBuilder: FormBuilder, private toastNotificationService: ToastNotificationService) { }
 
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
     this.userRole = this.formBuilder.group({
       id: [''],     
       paramCode: [''],     
       paramDescription: [''],
       paramType: [''],
       status: [''],
       remark: [''],
     })
   }
 
   // on save data
   public addUserRole() {
     this.submitted = true
     if (this.userRole.invalid) {
       return;
     }
     const formValue = this.userRole.value;
     this.userRoleModalData.id = formValue.id;
     this.userRoleModalData.name = formValue.name;
     this.userRoleModalData.normalizedName=formValue.normalizedName;
     
     this.toastNotificationService.success(NotificationAction.AddedSucessfully);
     // this.RoleService.addUserRole(this.userRoleModalData).subscribe(data => {
     //   this.toastNotificationService.success(NotificationAction.AddedSucessfully);
     //   this.onCloseUserRole(true);
     // })
     this.onCloseUserRole(true);
   }
   /**
   *  convenience getter for easy access to form fields
   * for add task code from
   */
   get formProperty() {
     return this.userRole.controls;
   }
   // get formProperty end...
 
   // close add modal 
   public onCloseUserRole(flag: boolean) {
     const obj = {
       flag: flag,
       data: this.userRole.value
     }
 
     this.closeAddUserRoleModal.emit(obj);
 
   }

}
