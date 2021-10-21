import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotificationAction } from 'app/core/constans/constants';
import { SupplierModel } from 'app/core/model/supplier/supplier-model';
import { SupplierRequestModel } from 'app/core/model/supplier/supplier.request.model';
import { SupplierService } from 'app/core/services/supplier/supplier.service';


import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit {

  //for modals button
  public actionsLayout = 'normal';
  //for submit
  submitted = false;
  // output from parent to close Modal 
  @Output() closeAddSupplierModal = new EventEmitter();

  @ViewChild('name') name?: ElementRef;



  //form Group tittle
  supplier: FormGroup |any;

  supplierModalData: SupplierModel = new SupplierModel();
  supplierRequestModelData: SupplierRequestModel = new SupplierRequestModel();

  constructor(private formBuilder: FormBuilder, private toastNotificationService: ToastNotificationService,
   public supplierService: SupplierService) { }

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
    this.supplier = this.formBuilder.group({
      id: [''],     
      name: [''],     
      contactDetail: [''],
      warehouseDetail: [''],
      status: [''],
      remark: [''],
    })
  }

  // on save data
  public addSupplier() {
    debugger;
    this.submitted = true
    if (this.supplier.invalid) {
      return;
    }
    const formValue = this.supplier.value;
   //  this.SupplierModalData.id = formValue.id;
   //  this.SupplierModalData.status = formValue.status;
   //  this.SupplierModalData.remark = formValue.remark;
    this.supplierModalData.name = formValue.name;
    this.supplierModalData.contactDetail = formValue.contactDetail;
    this.supplierModalData.warehouseDetail = formValue.warehouseDetail;    
    this.supplierRequestModelData.params = this.supplierModalData;
    this.supplierRequestModelData.role.push('admin');

    this.supplierService.addSupplier(this.supplierRequestModelData).subscribe(data => {
      this.toastNotificationService.success(NotificationAction.AddedSucessfully);
      this.onCloseSupplier(true);
    })
   //  this.onCloseSupplier(true);
  }
  /**
  *  convenience getter for easy access to form fields
  * for add task code from
  */
  get formProperty() {
    return this.supplier.controls;
  }
  // get formProperty end...

  // close add modal 
  public onCloseSupplier(flag: boolean) {
    const obj = {
      flag: flag,
      data: this.supplier.value
    }

    this.closeAddSupplierModal.emit(obj);

  }

}
