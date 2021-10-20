import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationAction } from 'app/core/constans/constants';
import { RoleModel } from 'app/core/model/role/role-model';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fabric-type-add',
  templateUrl: './fabric-type-add.component.html',
  styleUrls: ['./fabric-type-add.component.scss']
})
export class FabricTypeAddComponent implements OnInit {

   //for modals button
   public actionsLayout = 'normal';
   //for submit
   submitted = false;
   // output from parent to close Modal 
   @Output() closeAddFiberTypeModal = new EventEmitter();
 
   @ViewChild('name') name?: ElementRef;
 
 
 
   //form Group tittle
   fiberType: FormGroup |any;
 
   fiberTypeModalData: RoleModel = new RoleModel();
 
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
     this.fiberType = this.formBuilder.group({
       id: [''],     
       paramCode: [''],     
       paramDescription: [''],
       paramType: [''],
       status: [''],
       remark: [''],
     })
   }
 
   // on save data
   public addFiberType() {
     this.submitted = true
     if (this.fiberType.invalid) {
       return;
     }
     const formValue = this.fiberType.value;
     this.fiberTypeModalData.id = formValue.id;
     this.fiberTypeModalData.name = formValue.name;
     this.fiberTypeModalData.normalizedName=formValue.normalizedName;
     
     this.toastNotificationService.success(NotificationAction.AddedSucessfully);
     // this.RoleService.addfiberType(this.fiberTypeModalData).subscribe(data => {
     //   this.toastNotificationService.success(NotificationAction.AddedSucessfully);
     //   this.onClosefiberType(true);
     // })
     this.onCloseFiberType(true);
   }
   /**
   *  convenience getter for easy access to form fields
   * for add task code from
   */
   get formProperty() {
     return this.fiberType.controls;
   }
   // get formProperty end...
 
   // close add modal 
   public onCloseFiberType(flag: boolean) {
     const obj = {
       flag: flag,
       data: this.fiberType.value
     }
 
     this.closeAddFiberTypeModal.emit(obj);
 
   }

}