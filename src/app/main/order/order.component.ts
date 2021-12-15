import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

     //form Group tittle
     orderView: FormGroup |any;

     //Modal to open View Order
  public openViewOrderModal = false;
 

  constructor(private formBuilder: FormBuilder) { }

  
  ngOnInit(): void {
    //form function declare
    this.addFormControl();

  }

   // function to open view  modal
   onViewOrder() {
    this.openViewOrderModal = true;
    // this.renderer2.addClass(document.body, ModalCssConstants.ModalOpen);
  }

  //form control function
  addFormControl() {
    this.orderView = this.formBuilder.group({
      id: [''],     
      paramCode: [''],     
      paramDescription: [''],
      paramType: [''],
      status: [''],
      remark: [''],
    })
  }

  // tslint:disable-next-line:max-line-length
  public thumbnailSrc =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/rila.jpg";
  // tslint:disable-next-line:max-line-length
  public cover =
    "https://www.telerik.com/kendo-angular-ui-develop/components/layout/card/assets/black_sea.jpg";

  public liked = false;

  public toggleLike(): void {
    this.liked = !this.liked;
  }

  public heartIcon(): string {
    return this.liked ? "k-icon k-i-heart" : "k-icon k-i-heart-outline";
  }

  // function to close order modal
  closeViewOrderModal(data: any) {
    
    this.openViewOrderModal = false;
  }

}
