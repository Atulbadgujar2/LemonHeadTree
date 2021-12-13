import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

     //form Group tittle
     fiberType: FormGroup |any;
 

  constructor(private formBuilder: FormBuilder,) { }

  
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

}
