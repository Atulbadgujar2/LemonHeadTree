import { Injectable } from '@angular/core';
import { EwpError } from '../exception/ewp-error';
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public showErrorAlert(title: string, description: string, ewpError: EwpError, callbackHandler: (arg: any) => void): void {
        
    let that = this;
    if(!title || title == ''){
        title = 'Alert';
    }
    let modalHTML = '<div id="errorModal"><div class="modal fade in" id="myModal" tabindex="-1" role="dialog" style="display:block"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" id="myclose" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">' + title + '</h4></div><div class="modal-body">' + description + '</div><div class="modal-footer"><button type="button" id="okBtn" class="btn btn-primary btn-sm">OK</button></div></div></div></div><div class="modal-backdrop fade in"> </div> </div>'
    if (document.getElementById("errorModal")) {
        // let errorElement = document.createElement('span');
        // errorElement.innerHTML = '<br/>' + description;
        // document.body.querySelector('#errorModal .modal-body').appendChild(errorElement);
    }
    else {
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const myokBtn =  document.body.querySelector('#okBtn');
        if(myokBtn)
        myokBtn.addEventListener('click', function () {
            
            // that.authservice.logout();
            that.removeAlert('errorModal')
            if (callbackHandler != null) {
                callbackHandler(ewpError);
            }
        })
    }
    const myclose = document.body.querySelector('#myclose');
    if(myclose)
    myclose.addEventListener('click', function () {
        that.removeAlert('errorModal')
        if (callbackHandler != null) {
            callbackHandler(ewpError);
        }
    })
}

confirmAlert(title: string, description: string, ewpError: EwpError, okCallbackHandler: (arg: any) => void, cancelCallbackHandler: (arg: any) => void,okBtnLabel:string='', cancelBtnLabel:string='') {
    let that = this;
    if(okBtnLabel==''){
        okBtnLabel = 'OK';
    }
    if(cancelBtnLabel==''){
        cancelBtnLabel = 'Cancel';
    }
    let modalHTML = '<div id="confirmModal"><div class="modal fade in" id="myModal" tabindex="-1" role="dialog" style="display:block"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" id="closeBtn" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">' + title + '</h4></div><div class="modal-body">' + description + '</div><div class="modal-footer"><button type="button" id="confirmBtn" class="btn btn-primary btn-sm">' + okBtnLabel + '</button> <button type="button" id="confirmCancelBtn" class="btn btn-primary btn-sm">' + cancelBtnLabel + '</button></div></div></div></div><div class="modal-backdrop fade in"> </div> </div>'
    if(document.getElementById("confirmModal")){
        let errorElement = document.createElement('span');
        errorElement.innerHTML = '<br/>'+ description;
        const confirmmodel =document.body.querySelector('#confirmModal .modal-body');
        if(confirmmodel)
        confirmmodel.appendChild(errorElement);
    }
    else{
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const confirmBtnsecond = document.body.querySelector('#confirmBtn');
        if(confirmBtnsecond)
        confirmBtnsecond.addEventListener('click', function () {
           // document.getElementById('confirmModal').remove(); // remove() not support in IE 11
           that.removeAlert('confirmModal');
            if(okCallbackHandler != null) {
                okCallbackHandler(ewpError);
            }
        })
        const confirmCancelbtnsecond = document.body.querySelector('#confirmCancelBtn');
        if(confirmCancelbtnsecond)
        confirmCancelbtnsecond.addEventListener('click', function () {
            //document.getElementById('confirmModal').remove(); // remove() not support in IE 11
            that.removeAlert('confirmModal');
            if(cancelCallbackHandler != null) {
                cancelCallbackHandler(ewpError);
            }
        })
        // 
    }
    const myclosethirdbtnSecond = document.body.querySelector('#closeBtn');
   if(myclosethirdbtnSecond)
   myclosethirdbtnSecond.addEventListener('click', function () {
       // document.getElementById('confirmModal').remove(); // remove() not support in IE 11
       that.removeAlert('confirmModal');
        if(cancelCallbackHandler != null) {
            cancelCallbackHandler(ewpError);
        }
    })
   
}

public showErrorAlertOnSessionExpiry(title: string, ewpError: EwpError): void {
    let that = this;
    if(!title || title == ''){
        title = 'Alert';
    }
    let modalHTML = '<div id="errorModal"><div class="modal fade in" id="myModal" tabindex="-1" role="dialog" style="display:block"><div class="modal-dialog modal-sm" role="document"><div class="modal-content"><div class="modal-header"><button type="button" id="myclose" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">' + title + '</h4></div><div class="modal-body">' + 'Your session has expired. Please login again.' + '</div><div class="modal-footer"><button type="button" id="okBtn" class="btn btn-primary btn-sm">OK</button></div></div></div></div><div class="modal-backdrop fade in"> </div> </div>'
    if (document.getElementById("errorModal")) {
        // let errorElement = document.createElement('span');
        // errorElement.innerHTML = '<br/>' + 'Your session has expired. Please login again.';
        // document.body.querySelector('#errorModal .modal-body').appendChild(errorElement);
    }
    else {
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const okBtnthird = document.body.querySelector('#okBtn');
        if(okBtnthird)
        okBtnthird.addEventListener('click', function () {
            // let authService: AuthService = ServiceLocator.injector.get(AuthService);
            // authService.logoutWithoutSession();
            that.removeAlert('errorModal')
        })
    }
    const closebtnThird =document.body.querySelector('#myclose');
    if(closebtnThird)
    closebtnThird.addEventListener('click', function () {
        that.removeAlert('errorModal');
    })
}

private removeAlert(selector:any): void {
    //document.getElementById('errorModal').remove(); // remove() not support in IE 11
    let child = document.getElementById(selector);
  //  child.parentNode.removeChild(child);
}

}