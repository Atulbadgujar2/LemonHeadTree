//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Divyansh Jain
// Original Date: 29 Sep 2021
//==============================================================================


import { HostListener, ViewChildren, QueryList, Injectable } from '@angular/core';
import { ExcelExportData } from '@progress/kendo-angular-excel-export';
import { GridComponent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { filterBy, GroupDescriptor } from '@progress/kendo-data-query';
import * as moment from 'moment';
import { exportPDF, Group } from '@progress/kendo-drawing';
// Save Settings
import { process } from '@progress/kendo-data-query';
import { GridSettings } from '../interface/grid-settings.interface';
import { AlertService } from '../services/alert.service';
import { DateTimeFormatterPipe } from '../pipes/datetimeformatter.pipe';

import { CurrencyFormattorPipe } from '../pipes/currencyformatter.pipe';
import { FavouriteService } from '../services/favourite/favourite.service';


@Injectable()
export abstract class BaseGrid {

    // Save Settings

    public groups: GroupDescriptor[] | undefined = [];
    public pageable: any;
    public sortable = { allowUnsort: false };
    public radioSelected?: string;
    public mobileViewEnabled = false;
    public gridViewName: any;
    public gridViewList: any;
    public desktopMedia = '(min-width: 768px)';
    public mobileMedia = '(max-width: 767px)';
    public dateTimeFormatId: string = 'MM/DD/YYYY';
    public gridSettings: GridSettings = {
        state: {
            skip: 0,
            take: 20,
            group: [],
            filter: {
                logic: 'and',
                filters: []
            }
        },
        columnsConfig: [],
        gridData: { "data": [], "total": 0 }
    };
    public screenId = ''
    // Save Settings
    //pdf print
    @ViewChildren(GridComponent)
    public grids?: QueryList<GridComponent> | any;

    // pdf data
    public applicationName: string = '';
    public applicationLogo = 'assets/images/eworkplacelogo.png';

    public loggedInUser: string = '';

    public currentTimeZone: string = '';
    public currentDateTimeFormat: string = '';
    public currentDateTimeFormatJS: string = '';
    public currentDateFormat: string = '';
    public currentDateFormatJS: string = '';
    public gridDateFormat = '';


    // for page size option
    public buttonCount = 20;
    public info = true;
    public type: 'numeric' | 'input' = 'numeric';
    public pageSizes = true;
    public previousNext = true;
    public pageSize = 20;

    // Added for loader
    public loadingEnabled: boolean = false;

    // Calculate width for responsive
    public windowWidth: number | undefined;

    // Enable/Disable Grid
    public groupingEnabled: boolean = true;
    public filterEnabled: boolean = true;
    public columnMenuEnabled: boolean = true;

    // Date Filter
    public openedDatePicked: boolean = false;
    public selectedDateLbl: string = ''; //  Date Filter label
    public isSelectedDateLbl: number = 0; //  Date Filter label

    public currentDateTime: string | undefined;
    // show active/inactive in grid
    public activeFilterList = [
        {
            'Text': 'Active',
            'Status': 'Active'
        },
        {
            'Text': 'Inactive',
            'Status': 'Inactive'
        },
        {
            'Text': 'Deleted',
            'Status': 'Deleted'
        }
    ];
    public currentState: any;
    public filterTrue: any;
    abstract gridDataList: any;
    public exportData: any;
    public currentSelectedDateLbl: string = '';
    public dateFilterConfigData = null;

    // to get favourite page data
    public favouriteActive = false;
   // favouriteService: any;
    employeeModelData: any;
    currentUser: any;
    constructor(public alertService: AlertService, public datePipe: DateTimeFormatterPipe
        , public currencyPipe: CurrencyFormattorPipe, public favouriteService: FavouriteService) {
        // save settings
        this.pageable = {
            buttonCount: 20,
            info: true,
            type: this.type,
            pageSizes: true,
            previousNext: true
        }
        // save settings  
    }


    // Grid settings on mobile view
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.getWindowWidth();
    }

    public initGrid() {
        this.allData = this.allData.bind(this);
        this.getWindowWidth();

        // const formatIndex = DateLanguageSupporterHelper.SupportedDateTimeFormat.findIndex(i => i.DateTimeFormatId === this.dateTimeFormatId);
        // this.currentDateFormat = DateLanguageSupporterHelper.SupportedDateTimeFormat[formatIndex].DateTimeFormat;
        // this.currentDateFormatJS = DateLanguageSupporterHelper.SupportedDateTimeFormat[formatIndex].JSDateTimeFormat;

        // this.currentDateTimeFormat = DateLanguageSupporterHelper.SupportedDateTimeFormat[formatIndex].DateTimeFormat + ' ' + AppConstants.DefaultTimeFormat;
        // this.currentDateTimeFormatJS = DateLanguageSupporterHelper.SupportedDateTimeFormat[formatIndex].JSDateTimeFormat + ' ' + AppConstants.DefaultTimeFormat;
        // this.gridDateFormat = '{0:' + this.currentDateFormatJS + '}';
    }

    // for responsive
    public getWindowWidth() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth < 768) {
            this.groupingEnabled = false;
            this.filterEnabled = false;
            this.columnMenuEnabled = false;
            this.mobileViewEnabled = true;
        } else {
            this.groupingEnabled = true;
            this.filterEnabled = true;
            this.columnMenuEnabled = true;
            this.mobileViewEnabled = false;
        }
    }

    // added new for trigger external click of export excel and PDF
    public exportToExcel(grid: GridComponent): void {
        grid.columns.forEach((item) => {
            if (item.title == "Action") {
                item.hidden = true;
            }
        });

        grid.saveAsExcel();

        grid.columns.forEach((item) => {
            if (item.title == "Action") {
                item.hidden = false;
            }
        });
    }

    public exportToPDF(grid: GridComponent): void {
        grid.columns.forEach((item) => {
            if (item.title == "Action") {
                item.hidden = true;
            }
        });
        grid.saveAsPDF();
        grid.columns.forEach((item) => {
            if (item.title == "Action") {
                item.hidden = false;
            }
        });
    }

    // Exports excel and pdf files.
    public setExportData(data: { pageName: any; }) {
        this.exportData = {
            "pageName": data.pageName,
            "allData": this.allData
        }
    }



    public getLocalJSDate(dateTimeString: string, dateFormat: string, targetTimeZone: string, timeFormat: string = ''): any {
        if (dateTimeString) {
            if (timeFormat) {
                dateFormat += ' ' + timeFormat;
            }
            // let localDate: string = this.datePipe.transform(dateTimeString, true, DateStyle.None, TimeStyle.None, dateFormat, false, targetTimeZone, '');
            // return moment(localDate, dateFormat).toDate();
        } else {
            return null!;
        }
    }

    // ===== New code For Date Filter ===========



    // public setPdfData() {
    //     if (this.localStorageService.getTopHeaderLeftLogoUrl() != null) {
    //         if (this.localStorageService.getTopHeaderLeftLogoUrl().trim().length > 0) {
    //             this.applicationLogo = this.localStorageService.getTopHeaderLeftLogoUrl().trim()
    //         }
    //     }
    //     this.loggedInUser = this.localStorageService.getUserName();
    // }

    // get all the data from grid.
    public allData(): ExcelExportData {
        const result: ExcelExportData = {
            data: this.getExportDataList()
        };
        return result;
    }
    public dataStateChange(state: DataStateChangeEvent): void {
        this.currentState = state;
        this.filterTrue = true;
        this.allData = this.allData.bind(this);
        // save settings
        this.gridSettings.state = state;
        this.groups = state.group;
        this.gridSettings.state.group = this.groups
        this.gridSettings.gridData = process(this.gridDataList, this.gridSettings.state
        )
        // save settings  
    }

    public getExportDataList(): any {
        if (this.filterTrue) {
            return filterBy(this.gridDataList, this.currentState.filter);
        }
        else {
            return this.gridDataList;
        }

    }
    // public getExportDataList(): any {
    //     return this.gridDataList;
    // }



    public applyDateFormatPipe(value: string): any {
        // return this.datePipe.transform(value, true, 0, 2, this.currentDateTimeFormat, false, this.currentTimeZone);
    }

    public applyCurrencyFormatPipe(value: string): any {
        // return this.currencyPipe.transform(value);
    }

    //added for print
    public printToPDF(grid: any) {
        const promises = this.grids.map((grid: { drawPDF: () => any; }) => grid.drawPDF());
        Promise.all(promises).then(groups => {
            const rootGroup = new Group({
                pdf: {
                    multiPage: true
                }
            });
            groups.forEach((group: any) => {
                rootGroup.append(...group.children);
            });

            let option = {
                paperSize: "A3",
                margin: { bottom: "70px", top: "30px", left: "30px", right: "30px" },
                scale: 0.8,
                landscape: false,
                title: this.exportData.pageName,
                template: (data: any) => `<div style="position:absolute; padding-top:10px; width:100%; border-top:1px solid #e5e5e5; left:0; text-align:center; bottom:10px; font-size:12px; z-index:2;">sd</div>`
            }

            //   let option = {
            //     paperSize: "A4",
            //     margin: {bottom:"70px",top:"30px",left:"30px",right:"30px"}, 
            //     scale: 0.8,
            //     landscape:true,
            //     title:this.exportData.pageName,
            //     template: (data) => `<div style="position:absolute; padding-top:10px; width:100%; border-top:1px solid #e5e5e5; left:0; text-align:center; bottom:10px; font-size:12px; z-index:2;">sd</div>`     
            //   }
            return exportPDF(rootGroup, option);
        }).then(dataUri => {
            let checkIE = this.msieversion();
            if (checkIE) {
                grid.saveAsPDF();
            }
            else {
                let ifrm = document.createElement("embed");
                ifrm.setAttribute("src", dataUri);
                ifrm.setAttribute("width", "100%");
                ifrm.setAttribute("height", "100%");
                let pageStyle = '<style type="text/css">*{margin:0; padding:0;}</style>';
                let newHTML = '<html><head><title>' + this.exportData.pageName + '</title>' + pageStyle + '</head><body>' + ifrm.outerHTML + '</body>';
                let newWindow = window.open("");
                newWindow?.document.write(newHTML, '');
            }
        });
    }

    private msieversion(): boolean {
        // check for IE 11 and Edge
        if (/rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) {
            return true;
        }
        else {
            return false
        }

    }

    // close date range picker
    public closeDateRangePicker() {
        this.openedDatePicked = false;
    }
    // reset column settings
    resetColumnSettings(grid: any) {
        let colList = grid.columnList.columns._results;
        for (let i = 0; i < colList.length; i++) {
            colList[i].hidden = false;
        }
    }

    // Save Settings Start

    // Map saved grid view
    private mapGridSettings(gridSettings: GridSettings): GridSettings {
        const state = gridSettings.state;
        this.mapDateFilter(state.filter);
        return {
            state,
            columnsConfig: gridSettings.columnsConfig.sort((a, b) => a.orderIndex! - b?.orderIndex!),
            gridData: process(this.gridDataList, state),
            name: gridSettings.name
        };
    }

    // Apply Date filter
    private mapDateFilter = (descriptor: any) => {
        const filters = descriptor.filters || [];
        filters.forEach((filter: { filters: any; }) => {
            if (filter.filters) {
                this.mapDateFilter(filter);
            }
        });
    }

    // check saved grid view available or not
    public InitSaveGirdView() {
        if (this.gridViewList && this.gridViewList.length > 0) {
            // Get custom saved views
            this.getSelectedView();
        }
        else {
            // Set default view if custom view is not available
            this.setInitGridSettings(false, null);
        }
    }
    // Get selected grid view
    public getSelectedView() {
        let loadSettingFlag = true;
        // If no custom view available        
        if (this.gridViewList.length == 0) {
            this.radioSelected = 'Default View';
        }
        // If custom view available
        else {
            let defaultView = this.gridViewList.find((Item: { iS_DEFAULT: any; }) => Item.iS_DEFAULT === true);
            // If custom view available but default not set
            if (defaultView != undefined) {
                this.radioSelected = defaultView.vieW_NAME;
            }
            else {
                this.radioSelected = 'Default View';
            }
        }
        // Get default seleted view
        let indx = this.gridViewList.findIndex((item: { vieW_NAME: string | any; }) => item.vieW_NAME == this.radioSelected);
        // If custom view available but default not set
        if (indx == -1) {
            indx = null;
            loadSettingFlag = false;
        }
        else {
            this.radioSelected = this.gridViewList[indx].vieW_NAME;
        }
        this.setInitGridSettings(loadSettingFlag, indx);
    }

    // Load grid with saved seleted view
    public loadGridView(data: any) {
        let viewFlag = data.flag;
        let index = data.index;
        this.gridViewList = data.list;
        this.setInitGridSettings(viewFlag, index);
    }

    // Set Inital Grid View Settings
    public setInitGridSettings(loadSettingFlag: any, index: any) {
        let gridSettings: GridSettings;
        // "index == null" means no custom view available or default view not set in list
        if (index == null) {
            gridSettings = null!
        }
        else {
            gridSettings = JSON.parse(this.gridViewList[index].vieW_SETTING_JSON);
            // check if checkbox column than remove from array
            let checkboxColumn = gridSettings.columnsConfig.findIndex(item => item.isCheckboxColumn == true);
            if (checkboxColumn != -1) {
                gridSettings.columnsConfig.splice(checkboxColumn, 1)
            }
        }
        if (gridSettings !== null && this.mobileViewEnabled == false && loadSettingFlag == true) {
            this.gridSettings = this.mapGridSettings(gridSettings);
        }
        else {
            this.gridSettings.state.group = [];
            this.gridSettings.state.take = 20;
            this.gridSettings.state.skip = 0;
            this.gridSettings.state.filter = {
                logic: 'and',
                filters: []
            };
            this.gridSettings.gridData = process(this.gridDataList, {
                // Initial filter descriptor
                skip: 0,
                // take: 20,
                group: [],
                filter: {
                    logic: 'and',
                    filters: []
                }
            })
            this.gridSettings.name = 'Default View';
            this.radioSelected = 'Default View';
            this.gridSettings.columnsConfig = this.getGridColums();
        }
    }
    // Set Inital Grid Settings

    // Call API to get custom grid view list 
    getGridViewList(screenId: any) {
         let appkey = '';
        // this.persistingService.getAllViews(screenId, appkey)
        //     .subscribe(
        //         response => {
                    this.gridViewList = screenId;
                    this.InitSaveGirdView(); // Get Saved Grid Settings
        //         }
        //     ).add(() => {
        //         this.loadingEnabled = false;
        //     });
    }

    // Save Settings End



    abstract getGridColums():any[];

    abstract getDataList(): void;
    public getfavourite(screenId: string) {
        this.favouriteService.getfavourite(this.currentUser.id).subscribe(
            (            response: any) => {
                this.employeeModelData = response;
                for (let item of this.employeeModelData) {
                    if (item.screeN_NAME === screenId && item.active) {
                        this.favouriteActive = true;
                    }
                }
            })

    }

}