import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastNotificationService } from '../../services/toastnotification.service';

@Component({
  selector: 'app-common-alert',
  templateUrl: './common-alert.component.html',
  styleUrls: ['./common-alert.component.scss']
})
export class CommonAlertComponent implements OnInit {

 //for modals button
 public actionsLayout = 'normal';

 @Output() closeAlertModal = new EventEmitter();
 @Input() message: string | undefined;
 messageType: string | undefined
 public loaderEnabled = false;
 // contains tenant data
 //public addEmployeeData: EmployeeViewModel = new EmployeeViewModel();
 public employeeId: string | undefined;

 //private editedRowIndex: number;



 constructor(private toastNotificationService: ToastNotificationService) {

 }

 ngOnInit(): void {
   this.messageType = this.message;
 }

 public oncloseDelEmployeeModal() {
   debugger;
   this.closeAlertModal.emit(false);
 }

 // //Close Alert Modal
 // onCloseAlertModal(status){
 //   let data = {
 //     "modalFlag":false,
 //     "confirmStatus":status
 //   }
 //   this.closeAlertModal.emit(data);
 // }


 onDeleteEmployeeDetails(status: any) {
   let data = {
     "modalFlag": false,
     "confirmStatus": status
   }
   this.closeAlertModal.emit(data);
 }

 // onCancelPoPup(){    
 //   this.closeDelEmployeeModal.emit(false);  
 // }



 public form: FormGroup = new FormGroup({
   sizes: new FormControl(null, Validators.required)
 });


 //close
 public opened = false;


 ///

 public data: string[] = ['foo', 'bar', 'baz'];
 public comboBoxValue?: string;
 public dropDownValue?: string;
 public autoCompleteValue?: string;
 public multiSelectValue?: string[] = [];

 public sizes: string[] = ['001  This is Task1 ', '002 This is Task2', '003 This is Task3', '004 This is Task4', '005 This is Task5', '006 This is Task6'];


 public close() {
   this.opened = false;
 }

 public open() {
   this.opened = true;
 }


}

