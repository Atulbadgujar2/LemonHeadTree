import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationAction } from 'app/core/constans/constants';
import { SupplierModel } from 'app/core/model/supplier/supplier-model';
import { SupplierRequestModel } from 'app/core/model/supplier/supplier.request.model';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { SupplierService } from 'app/core/services/supplier/supplier.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit {


 //for modals button
 public actionsLayout = 'normal';

 @Output() closeEditSupplierModal = new EventEmitter();

 //Input Param use to get value from  list grid component.
 @Input() onSupplierId?: string;

 // contains tenant data
 SupplierData: any = {};
 supplierModalData: SupplierModel = new SupplierModel();
 supplierRequestModelData: SupplierRequestModel = new SupplierRequestModel();

 submitted: boolean = false;
 // Para to pass data to parent:
 public SupplierId?: string;
 //form Group tittle
 suppliers: FormGroup|any
 //flag for loader
 public loadingPanelVisible = true;
 public data : any;

 constructor(private formBuilder: FormBuilder, public supplierService: SupplierService, private toastNotificationService: ToastNotificationService,
   private router: Router, private dataSharingService: DataSharingService) { }

 ngOnInit(): void {

   
   //form function declare
   this.addFormControl();
   this.onSupplierId = this.dataSharingService.sharedStringId
   //if clientid is undefined navigate to list page 
   // if (this.onSupplierId == undefined) {
   //   this.router.navigateByUrl('main/sm/role');
   // }
   // else {
   //   this.getSupplierDetails();

   // }
   debugger;
   this.data = this.dataSharingService.sharedObject
   this.getSupplierDetails();

 
 }

 // func to update edit data by api
 public getSupplierDetails() {
   // if(this.onSupplierId)
   // this.SupplierService.getSupplierDetails(this.onSupplierId).subscribe(response => {
   //   this.SupplierData = response;
   //   this.setFormValue();
   // })
   this.setFormValue();
 }

 setFormValue() {
   this.suppliers.patchValue({
     id: this.data.id,
     name: this.data.name,
     contactDetail: this.data.contactDetail,
     warehouseDetail: this.data.warehouseDetail,
     status: this.data.status,
     remark: this.data.remark

   })
   // this.SupplierModalData = this.SupplierData;
   this.loadingPanelVisible = false
 }

 //form control function
 addFormControl() {
   this.suppliers = this.formBuilder.group({
     id: [''],
     name: [''],
     contactDetail: [''],
     warehouseDetail: [''],
     status: [''],
     remark: ['']
     
   })
 }

 // on Update data
 public updateSupplierDetails() {
   debugger;
   this.submitted = true
   if (this.suppliers.invalid) {
     return;
   }
   const formValue = this.suppliers.value;
   this.supplierModalData.id = formValue.id;
   this.supplierModalData.name = formValue.name;
   this.supplierModalData.contactDetail = formValue.contactDetail;
   this.supplierModalData.warehouseDetail = formValue.warehouseDetail;    
   this.supplierRequestModelData.params = this.supplierModalData;
   this.supplierRequestModelData.role.push('admin');
   this.supplierService.updateSupplierDetails(this.supplierRequestModelData).subscribe(result => {
     this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
     this.onCloseSupplier(true);
   })

   

  //  this.toastNotificationService.success(NotificationAction.UpdateSucessfully)
  //    this.onCloseSupplier(true);
 }

 /**
*  convenience getter for easy access to form fields
* for add task code from
*/

 get formProperty() {
   return this.suppliers.controls;
 }
 // get formProperty end...
 // close edit modal 
 public onCloseSupplier(refreshList: boolean) {
   debugger;
   let obj = { "flag": refreshList, "data":  this.suppliers.value };
   this.closeEditSupplierModal.emit(obj);
 }

}
