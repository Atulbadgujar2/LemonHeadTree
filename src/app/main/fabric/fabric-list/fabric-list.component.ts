import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { BaseGrid } from 'app/core/component/basegrid';
import { NotificationAction, ScreenConstants } from 'app/core/constans/constants';
import { ModalCssConstants } from 'app/core/constans/css.constants';
import { FabricModel } from 'app/core/model/fabric/fabric.model';
import { RoleModel } from 'app/core/model/role/role-model';
import { CurrencyFormattorPipe } from 'app/core/pipes/currencyformatter.pipe';
import { DateTimeFormatterPipe } from 'app/core/pipes/datetimeformatter.pipe';
import { AlertService } from 'app/core/services/alert.service';
import { FabricService } from 'app/core/services/fabric/fabric.service';
import { FavouriteService } from 'app/core/services/favourite/favourite.service';
import { DataSharingService } from 'app/core/services/shared/data.sharing.service';
import { ToastNotificationService } from 'app/core/services/toastnotification.service';
import { FabricRequestModel } from 'app/core/model/fabric/fabric.request.model';

@Component({
  selector: 'app-fabric-list',
  templateUrl: './fabric-list.component.html',
  styleUrls: ['./fabric-list.component.scss']
})
export class FabricListComponent extends BaseGrid implements OnInit {

  
  // constructor() { }

  // ngOnInit(): void {
  // }

  

  //Modal to open Add User role
  public openAddFabricModal = false;
  //Modal to open Edit User role
  public openEditFabricModal = false;
  public Fabric?: number;
  //Modal to open delete
  public openDelFabric = false;

  public fabricModalData: FabricModel = new FabricModel();

   //For Delete Request
   fabricRequestModelData: FabricRequestModel = new FabricRequestModel();

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
    public currencyPipe: CurrencyFormattorPipe, public fabricService: FabricService, private router: Router, private dataSharingService: DataSharingService
    , public favouriteService: FavouriteService) {
      super(alertService, datePipe, currencyPipe, favouriteService);
   
  }
  ngOnInit(): void {
    this.getDataList();
    super.initGrid();
    //for screen View
    this.screenId = ScreenConstants.Fabric;
    // for grouping toggle 
    this.groupingEnabled = false
    // for filter toggle
    this.filterEnabled = false
    //set PDF/Excel export information
    this.setExportData({ "pageName": ScreenConstants.Fabric });
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
    this.fabricService.getFabricList()
      .subscribe(
        response => {        
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
  onAddFabric() {
    this.openAddFabricModal = true;
    // this.renderer2.addClass(document.body, ModalCssConstants.ModalOpen);
  }
  // function to close add  modal
  closeAddFabricModal(data: any) {
    // if (flag) {
    //   this.getDataList();
    // }
    this.gridData.push(data.data);
    let valueJson = JSON.stringify(this.gridData); 
    localStorage.setItem('hardcoded',valueJson)
    this.openAddFabricModal = false;
  }

 

  /**
* funtion to get selected data
* on double click
* @param column contain selected data
*/
  getSelectedData(selection:any) {    
    if (selection == 0) {
      return
    } else {
      const id = selection.pop();
      const indexes = this.gridSettings.gridData.data.findIndex((item: { id: any; }) => item.id === id)
      this.selectedData = this.gridSettings.gridData.data[indexes];
      //   const indexes = this.gridData.findIndex((item: { id: any; }) => item.id === id)
      // this.selectedData = this.gridData[indexes];
      this.dataSharingService.sharedStringId = this.selectedData.id;
      this.dataSharingService.sharedObject = this.selectedData;
      if (this.selectedData.id == undefined) {
        this.router.navigateByUrl('main/sm/role');
      }
      else {
        this.openEditFabricModal = true;
      }
    }
  }
  // get selected data end..

  // function to close Edit  modal
  closeEditFabricModal( data: any) {
    // this.openEditFabricModal = obj.flag;

    const indexes = this.gridData.findIndex(element => element.id === data.data.id)
    // this.gridDataList[indexes] = data.data;
    // this.gridSettings.gridData.data = this.gridDataList;
     this.gridData[indexes] = data.data;
     let valueJson = JSON.stringify(this.gridData); 
     localStorage.setItem('hardcoded',valueJson)
    // this.gridSettings.gridData = this.gridDataList;
    // this.gridDataList.push(data.data);
     this.openEditFabricModal = false;
    // if (obj.data) {
    //   this.getDataList();
    // }
    // this.renderer2.removeClass(document.body, ModalCssConstants.ModalOpen);
  }


  //Open del Modal
  onAlert() {
    this.openDelFabric = true;
    this.renderer2.addClass(document.body, ModalCssConstants.ModalOpen);
  }

  //Delete Modal open on id
  deleteFabric(id) {  
    this.fabricModalData = new FabricModel();
    this.fabricModalData.id = id;
    this.onAlert();
  }
  //Close del Modal
  closeAlertModal(flag: { confirmStatus: boolean; modalFlag: boolean; }) {
    if (flag.confirmStatus == true) {
      if(this.fabricModalData.id)
      this.fabricService.deleteFabricById(this.fabricRequestModelData).subscribe(
        res => {
          this.getDataList();
          this.toastNotificationService.success(NotificationAction.DeleteSucessfully);
        }
      )
    }    
      // if (flag.confirmStatus == true) {
   
    //   if(this.fabricModalData.id){
    //     // const indexes = this.gridSettings.gridData.findIndex(element => element.id === this.FabricModalData.id)
    //     // this.gridSettings.gridData.splice(indexes,1) 

    //     // var json = JSON.stringify(this.gridSettings.gridData);
    //       const indexes = this.gridData.findIndex(element => element.id === this.fabricModalData.id)
    //     this.gridData.splice(indexes,1) 
    //     let softjson = JSON.stringify(this.gridData);
    //     localStorage.setItem('hardcoded',softjson);
    //   // this.gridSettings.gridData = this.gridDataList;
    //   this.toastNotificationService.success(NotificationAction.DeleteSucessfully);
    //  //this.gridSettings.gridData.slice(this.gridDataList[indexes],1);
    //   }
    // }
      // this.FabricService.deleteFabric(this.FabricModalData.id).subscribe(
      //   res => {
      //     this.getDataList();
      //     this.toastNotificationService.success(NotificationAction.DeleteSucessfully);
      //   }
      // )
    // }
    this.openDelFabric = flag.modalFlag;
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
