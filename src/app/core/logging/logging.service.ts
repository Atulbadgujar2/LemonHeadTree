// ===============================================================================
// © 2015 eWorkplace Apps.  All rights reserved.
// Original Author: Sanjeev Khanna
// Original Date: 10 June 2017
// ==============================================================================

import { Injectable } from '@angular/core';
import { ErrorLog } from './error-log';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { DateTimeHelper } from '../helpers/datetime.helper';
import { environment } from '../../../environments/environment';

/**
 * This Class provide configurable log
 */
@Injectable()
export class LoggingService {

    private errorEmailAccessKey = 'A36270C2-4FB4-4112-8C3B-BECF1A245A80';

    /**
     * Constructor to inject http helper
     */
    constructor(private http: HttpClient) {
    }

    private setRequestOptions(httpOptions: any, includeToken = true): any {
        httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Accept: 'application/json',
                ErrorEmailAccessKey: this.errorEmailAccessKey,
                // 'Authorization': `Bearer ${accessToken}`
            })
        };

        return httpOptions;
    }

    private appendTimeInUrl(url: string): string {
        if (url.indexOf('?') > -1) {
            return url += '&dt=' + DateTimeHelper.getCurrentUTCDateTimeInUnixMS().toString();
        } else {
            return url += '?dt=' + DateTimeHelper.getCurrentUTCDateTimeInUnixMS().toString();
        }
    }

    /**
     * Method to log error detail on server
     * @param errorMsg: Error message
     * @param methodName: Method name
     * @param stackTrace: Stack trace
     */
    public logErrorOnServer(errorLogModel: ErrorLog) {
        try {
            let url = environment.FBCOServiceUrl + 'notification/senderroremail';
            const httpOptions: any = this.setRequestOptions(errorLogModel);
            url = this.appendTimeInUrl(url);
            return this.http.post(url, errorLogModel, httpOptions).subscribe();
        } catch (e) {
            this.logErrorOnConsole(e);
        }
    }

    /**
     * Method to show message on console
     * @param errord : Error instance.
     */
    public logErrorOnConsole(error: Error) {
    }
}
