import { TranslateService } from '@ngx-translate/core';


import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable(
    { providedIn: 'root' }
)
export class ToastNotificationService {

    private defaultTimeOut: number = 3000;
    private defaultShowProgressBar: boolean = true;
    private defaultPauseOnHover: boolean = true;
    private defaultClickToClose: boolean = true;
    private defaultMaxLength: number = 1000;
    private defaultMaxStack: number = 1;
    private defaultPreventDuplicates: string = 'visible';
    private defaultLastPreventDuplicates: boolean = true;
    private positionClass?: 'toast-bottom-center'
    constructor(public translate: TranslateService, private notificationService: ToastrService) {

    }

    success(content: string, title: string = "", override: any = null) {
        this.removeAll();
        override = {
            timeOut: this.defaultTimeOut,
            showProgressBar: this.defaultShowProgressBar,
            pauseOnHover: this.defaultPauseOnHover,
            clickToClose: this.defaultClickToClose,
            maxStack: this.defaultMaxStack,
            preventLastDuplicates: this.defaultPreventDuplicates,
            preventDuplicates: this.defaultLastPreventDuplicates,
            icon: {
                success: '<i class="fa fa-time"></i>'
            },
            maxLength: this.defaultMaxLength            
        };

        this.translate.get(content).subscribe((text: string) => {

            this.notificationService.success("", text, override);

        });
    }
    removeAll() {
        this.notificationService.clear();
    }

    error(content: string, title: string = "", override: any = null) {
        this.removeAll();
        override = {
            timeOut: this.defaultTimeOut,
            showProgressBar: this.defaultShowProgressBar,
            pauseOnHover: this.defaultPauseOnHover,
            clickToClose: this.defaultClickToClose,
            maxStack: this.defaultMaxStack,
            preventLastDuplicates: this.defaultPreventDuplicates,
            preventDuplicates: this.defaultLastPreventDuplicates,
            icon: {
                success: '<i class="fa fa-time"></i>'
            },
            maxLength: this.defaultMaxLength            
        };

        this.translate.get(content).subscribe((text: string) => {

            this.notificationService.error("", text, override);

        });
    }
}