import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BaseGrid } from 'app/core/component/basegrid';
import { NotificationAction, ScreenConstants } from 'app/core/constans/constants';
import { ModalCssConstants } from 'app/core/constans/css.constants';
import { FiberCompositionRequestModel } from 'app/core/model/fiber-composition/fiber-composition-request-model';
import { FiberCompositionModel } from 'app/core/model/fiber-composition/fiber-composition.model';
import { RoleModel } from 'app/core/model/role/role-model';
import { CurrencyFormattorPipe } from 'app/core/pipes/currencyformatter.pipe';
import { DateTimeFormatterPipe } from 'app/core/pipes/datetimeformatter.pipe';
import { AlertService } from 'app/core/services/alert.service';

import { FavouriteService } from 'app/core/services/favourite/favourite.service';
import { FiberCompositionService } from 'app/core/services/fiber-composition/fiber-composition-service';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';

@Component({
  selector: 'app-fiber-composition-list',
  templateUrl: './fiber-composition-list.component.html',
  styleUrls: ['./fiber-composition-list.component.scss']
})
export class FiberCompositionListComponent extends BaseGrid implements OnInit {

 
  // constructor() { }

  // ngOnInit(): void {
  // }

  

  //Modal to open Add User role
  public openAddFiberCompositionModal = false;
  //Modal to open Edit User role
  public openEditFiberCompositionModal = false;
  public FiberComposition?: number;
  //Modal to open delete
  public openDelFiberComposition = false;

  public fiberCompositionModalData: FiberCompositionModel = new FiberCompositionModel();
  //For Delete Request
  fiberTypeRequestModelData: FiberCompositionRequestModel = new FiberCompositionRequestModel();

  // to get data base grid property
  public gridDataList;
  public gridData : any[] = [];
  

  

  //get Selected key index
  public mySelection: number[] = [];
  selectedData: any = {};

  // show input job status
  favouriteActive = false;

  constructor(private renderer2: Renderer2, public alertService: AlertService,
    private toastNotificationService: ToastNotificationService, public datePipe: DateTimeFormatterPipe,
    public currencyPipe: CurrencyFormattorPipe, public fiberCompositionService: FiberCompositionService, private router: Router, private dataSharingService: DataSharingService
    , public favouriteService: FavouriteService) {
      super(alertService, datePipe, currencyPipe, favouriteService);
   
  }
  ngOnInit(): void {
    this.getDataList();
    super.initGrid();
    //for screen View
    this.screenId = ScreenConstants.FiberComposition;
    // for grouping toggle 
    this.groupingEnabled = false
    // for filter toggle
    this.filterEnabled = false
    //set PDF/Excel export information
    this.setExportData({ "pageName": ScreenConstants.FiberComposition });
  }
  filtertoggle() {
    this.filterEnabled = !this.filterEnabled
  }
  //for toggle button of grouping
  changeGroupAbleStaus() {
    this.groupingEnabled = !this.groupingEnabled
  }

  // to get data from api
  public getDataList(): void {
    this.loadingEnabled = true;
    this.fiberCompositionService.getFiberCompositionList()
      .subscribe(
        response => {
          debugger;
          let obj = response;
          this.gridDataList = obj.record;
          this.getGridViewList(response);
          //this.getGridViewList(this.screenId);
         // this.getfavourite(this.screenId)
        }).add(() => {
           this.loadingEnabled = false
        })

    
    //  debugger;
    //  if(localStorage.getItem('hardcoded') === undefined || localStorage.getItem('hardcoded') === null){
    //   // this.gridDataList = hardcoded;
    //   // this.gridSettings.gridData = this.gridDataList;
    //   this.gridData = hardcoded;
    //   let valueJson = JSON.stringify(this.gridData); 
    //   localStorage.setItem('hardcoded',valueJson)
    //  }
    //  else{
    //    debugger;
    //    let response = localStorage.getItem('hardcoded');
    //    let obj = JSON.parse(response);
    //    this.gridData = obj;
 
    //  }    
     
  }

  // function to open add  modal
  onAddFiberComposition() {
    this.openAddFiberCompositionModal = true;
    // this.renderer2.addClass(document.body, ModalCssConstants.ModalOpen);
  }
  // function to close add  modal
  closeAddFiberCompositionModal(data: any) {
    // if (flag) {
    //   this.getDataList();
    // }
    this.gridData.push(data.data);
    let valueJson = JSON.stringify(this.gridData); 
    localStorage.setItem('hardcoded',valueJson)
    this.openAddFiberCompositionModal = false;
  }

 

  /**
* funtion to get selected data
* on double click
* @param column contain selected data
*/
  getSelectedData(selection:any) {
    debugger;
    if (selection == 0) {
      return
    } else {
      const id = selection.pop();
      // const indexes = this.gridSettings.gridData.findIndex((item: { id: any; }) => item.id === id)
      // this.selectedData = this.gridSettings.gridData[indexes];
        const indexes = this.gridData.findIndex((item: { id: any; }) => item.id === id)
      this.selectedData = this.gridData[indexes];
      this.dataSharingService.sharedStringId = this.selectedData.id;
      this.dataSharingService.sharedObject = this.selectedData;
      if (this.selectedData.id == undefined) {
        this.router.navigateByUrl('main/sm/role');
      }
      else {
        this.openEditFiberCompositionModal = true;
      }
    }
  }
  // get selected data end..

  // function to close Edit  modal
  closeEditFiberCompositionModal( data: any) {
    // this.openEditFiberCompositionModal = obj.flag;

    const indexes = this.gridData.findIndex(element => element.id === data.data.id)
    // this.gridDataList[indexes] = data.data;
    // this.gridSettings.gridData.data = this.gridDataList;
     this.gridData[indexes] = data.data;
     let valueJson = JSON.stringify(this.gridData); 
     localStorage.setItem('hardcoded',valueJson)
    // this.gridSettings.gridData = this.gridDataList;
    // this.gridDataList.push(data.data);
     this.openEditFiberCompositionModal = false;
    // if (obj.data) {
    //   this.getDataList();
    // }
    // this.renderer2.removeClass(document.body, ModalCssConstants.ModalOpen);
  }


  //Open del Modal
  onAlert() {
    this.openDelFiberComposition = true;
    this.renderer2.addClass(document.body, ModalCssConstants.ModalOpen);
  }

  //Delete Modal open on id
  deleteFiberComposition(id) {
    debugger;
    this.fiberCompositionModalData = new FiberCompositionModel();
    this.fiberCompositionModalData.id = id;
    this.onAlert();
  }
  //Close del Modal
  closeAlertModal(flag: { confirmStatus: boolean; modalFlag: boolean; }) {
    if (flag.confirmStatus == true) {
      if(this.fiberCompositionModalData.id)
      this.fiberCompositionService.deleteFiberComposition(this.fiberTypeRequestModelData).subscribe(
        res => {
          this.getDataList();
          this.toastNotificationService.success(NotificationAction.DeleteSucessfully);
        }
      )
    }    
    //   if (flag.confirmStatus == true) {
   
    //   if(this.fiberCompositionModalData.id){
    //     // const indexes = this.gridSettings.gridData.findIndex(element => element.id === this.FiberCompositionModalData.id)
    //     // this.gridSettings.gridData.splice(indexes,1) 

    //     // var json = JSON.stringify(this.gridSettings.gridData);
    //       const indexes = this.gridData.findIndex(element => element.id === this.fiberCompositionModalData.id)
    //     this.gridData.splice(indexes,1) 
    //     let softjson = JSON.stringify(this.gridData);
    //     localStorage.setItem('hardcoded',softjson);
    //   // this.gridSettings.gridData = this.gridDataList;
    //   this.toastNotificationService.success(NotificationAction.DeleteSucessfully);
    //  //this.gridSettings.gridData.slice(this.gridDataList[indexes],1);
    //   }
    // }
    //   // this.FiberCompositionService.deleteFiberComposition(this.FiberCompositionModalData.id).subscribe(
    //   //   res => {
    //   //     this.getDataList();
    //   //     this.toastNotificationService.success(NotificationAction.DeleteSucessfully);
    //   //   }
    //   // )
    // // }
    this.openDelFiberComposition = flag.modalFlag;
    // this.renderer2.removeClass(document.body, ModalCssConstants.ModalOpen);
  }

  //for grid columns
  getGridColums() {
    let columns = [
      // {
      //   field: 'SeqNo',
      //   title: 'Seq No',
      //   filterable: false,
      //   media: this.desktopMedia,
      //   _width: 60
      // },
     
      {
        field: 'name',
        title: 'Name ',
        filterable: true,
        media: this.desktopMedia,

      },
      {
        field: 'Action',
        title: 'Action',
        _width: 80,
        class: 'grid-action-column',
        media: this.desktopMedia
      }
    ]
    return columns;
  }
  // Set default column list
}
