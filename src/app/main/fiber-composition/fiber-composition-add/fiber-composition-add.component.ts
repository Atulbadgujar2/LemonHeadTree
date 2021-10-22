import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationAction } from 'app/core/constans/constants';
import { FiberCompositionRequestModel } from 'app/core/model/fiber-composition/fiber-composition-request-model';
import { FiberCompositionModel } from 'app/core/model/fiber-composition/fiber-composition.model';
import { FiberCompositionService } from 'app/core/services/fiber-composition/fiber-composition-service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fiber-composition-add',
  templateUrl: './fiber-composition-add.component.html',
  styleUrls: ['./fiber-composition-add.component.scss']
})
export class FiberCompositionAddComponent implements OnInit {

 //for modals button
 public actionsLayout = 'normal';
 //for submit
 submitted = false;
 // output from parent to close Modal 
 @Output() closeAddFiberCompositionModal = new EventEmitter();

 @ViewChild('name') name?: ElementRef;



 //form Group tittle
 fiberComposition: FormGroup |any;

 fiberCompositionModalData: FiberCompositionModel = new FiberCompositionModel();
 fiberCompositionRequestModelData: FiberCompositionRequestModel = new FiberCompositionRequestModel();

 constructor(private formBuilder: FormBuilder, private toastNotificationService: ToastNotificationService,
  public fiberCompositionService: FiberCompositionService) { }

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
   this.fiberComposition = this.formBuilder.group({
     id: [''],     
     fibertype: [''],     
     compositionPercent: [''],
     paramType: [''],
     status: [''],
     remark: [''],
   })
 }

 // on save data
 public addFiberComposition() {
   debugger;
   this.submitted = true
   if (this.fiberComposition.invalid) {
     return;
   }
   const formValue = this.fiberComposition.value;
  //  this.FiberCompositionModalData.id = formValue.id;
  //  this.FiberCompositionModalData.status = formValue.status;
  //  this.FiberCompositionModalData.remark = formValue.remark;
   this.fiberCompositionModalData.fibertype = formValue.fibertype;
   this.fiberCompositionModalData.compositionPercent = formValue.compositionPercent;   
   this.fiberCompositionRequestModelData.params = this.fiberCompositionModalData;
   this.fiberCompositionRequestModelData.role.push('admin');

   this.fiberCompositionService.addFiberComposition(this.fiberCompositionRequestModelData).subscribe(data => {
     this.toastNotificationService.success(NotificationAction.AddedSucessfully);
     this.onCloseFiberComposition(true);
   })
  //  this.onCloseFiberComposition(true);
 }
 /**
 *  convenience getter for easy access to form fields
 * for add task code from
 */
 get formProperty() {
   return this.fiberComposition.controls;
 }
 // get formProperty end...

 // close add modal 
 public onCloseFiberComposition(flag: boolean) {
   const obj = {
     flag: flag,
     data: this.fiberComposition.value
   }

   this.closeAddFiberCompositionModal.emit(obj);

 }
}
