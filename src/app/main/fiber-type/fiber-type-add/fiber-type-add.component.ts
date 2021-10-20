import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationAction } from 'app/core/constans/constants';
import { FiberTypeModel } from 'app/core/model/fiber-type/fiber-type-model';
import { FiberTypeRequestModel } from 'app/core/model/fiber-type/fiber-type-request.model';
import { RoleModel } from 'app/core/model/role/role-model';
import { FiberTypeService } from 'app/core/services/fiber-type/fiber-type-service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fiber-type-add',
  templateUrl: './fiber-type-add.component.html',
  styleUrls: ['./fiber-type-add.component.scss']
})
export class FiberTypeAddComponent implements OnInit {

   //for modals button
   public actionsLayout = 'normal';
   //for submit
   submitted = false;
   // output from parent to close Modal 
   @Output() closeAddFiberTypeModal = new EventEmitter();
 
   @ViewChild('name') name?: ElementRef;
 
 
 
   //form Group tittle
   fiberType: FormGroup |any;
 
   fiberTypeModalData: FiberTypeModel = new FiberTypeModel();
   fiberTypeRequestModelData: FiberTypeRequestModel = new FiberTypeRequestModel();
 
   constructor(private formBuilder: FormBuilder, private toastNotificationService: ToastNotificationService,
    public fabricTypeService: FiberTypeService) { }
 
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
     debugger;
     this.submitted = true
     if (this.fiberType.invalid) {
       return;
     }
     const formValue = this.fiberType.value;
    //  this.fiberTypeModalData.id = formValue.id;
    //  this.fiberTypeModalData.status = formValue.status;
    //  this.fiberTypeModalData.remark = formValue.remark;
     this.fiberTypeModalData.paramCode = formValue.paramCode;
     this.fiberTypeModalData.paramDescription = formValue.paramDescription;
     this.fiberTypeModalData.paramType = formValue.paramType;    
     this.fiberTypeRequestModelData.params = this.fiberTypeModalData;
     this.fiberTypeRequestModelData.role.push('admin');

     this.fabricTypeService.addFiberType(this.fiberTypeRequestModelData).subscribe(data => {
       this.toastNotificationService.success(NotificationAction.AddedSucessfully);
       this.onCloseFiberType(true);
     })
    //  this.onCloseFiberType(true);
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
