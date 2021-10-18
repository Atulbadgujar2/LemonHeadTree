import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input() alertTitle: any;
  @Input() alertDes: any;
  @Input() alertType: any;
  @Input() isJson?: boolean
  @Output() closeAlertModal = new EventEmitter();

  public modalTitle?:string;
  public modalDes?:string;
  public modalType?:string;
  public showJson?:string;
  constructor() {

  }

  //Close Alert Modal
  onCloseAlertModal(status: boolean) {
    let data = {
      "modalFlag": false,
      "confirmStatus": status
    }
    this.closeAlertModal.emit(data);

  }

  ngOnInit() {
    this.modalTitle = this.alertTitle;
    this.modalDes = this.alertDes;
    this.modalType = this.alertType;
   // this.showJson = this.isJson
  }

}

