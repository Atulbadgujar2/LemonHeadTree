//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { Pipe, PipeTransform, Injectable } from '@angular/core';
import * as moment from 'moment';
import { DateTimeHelper } from '../helpers/datetime.helper';
import { DateStyle, TimeStyle } from '../helpers/datetime.helper';
// import { ComponentState } from 'src/@Core/misc/@core-componentstate';
// import { ErrorHandlingService } from 'src/@Core/services/error-handling.service';
// import { LocalStorageService } from 'src/@Core/services/localstorage.service';
// import { UserSession } from 'src/@Core/models/@core-usersession-model';

@Pipe(
    {
        name: 'DateTimeFormatterPipe'
    }
)

/**
 * This pipe class provide to format Date and time on the basis of input value.
 */

export class DateTimeFormatterPipe implements PipeTransform {

    constructor() {

    }

    transform(value: any, convertToLocalTZ: boolean = false, dateStyle: DateStyle = DateStyle.Medium, timeStyle: TimeStyle = TimeStyle.Short, customDateFormat: string = '', relativeDate: boolean = false, ianaTimeZone: string = 'Asia/Calcutta', culture: string = 'en-US'): any {
        try {

            // If value is empty
            if (!value){
                return value;
            }

            let dateTimeStyle: string = 'll LT';

            // Format Date

            if (dateStyle !== DateStyle.None && dateStyle !== DateStyle.CustomFormat) {

                dateTimeStyle = DateTimeHelper.getDateTimeFormatString(dateStyle, undefined);

            } else {

                dateTimeStyle = customDateFormat;

            }



            // Format Time

            if (timeStyle !== TimeStyle.None) {

                dateTimeStyle += ' ' + DateTimeHelper.getDateTimeFormatString(undefined, timeStyle);

            }

            // let userInfo: UserOtherInfo = LocalStorageHelper.getUserOtherInfo();
            // let userSession: UserSession = LocalStorageService.getUserSession();

            if (relativeDate === false) {

                if (convertToLocalTZ) {

                    return DateTimeHelper.GetIANADateTimeFromUTC(ianaTimeZone, value.toString(), dateTimeStyle.trim(), culture);

                } else {

                    return DateTimeHelper.getLocaleFormatDateTime(value.toString(), dateTimeStyle.trim(), culture);

                }

            }

            else {

                // tslint:disable-next-line:prefer-const

                // let clientDate: any = DateTimeHelper.GetUTCDateTimeFromIANA(userInfo.IanaTimeZone, moment.utc(value.toString()).toISOString(), '');
                let clientDate: any = moment.utc(DateTimeHelper.GetIANADateTimeFromUTC(ianaTimeZone, moment.utc(value.toString()).toISOString(), ''));

                let today: string = moment().format('LL');

                let yesterday: string = moment().add(-1, 'd').format('LL');

                // let daysDiff: number = moment(clientDate, 'LL').diff(moment(today, 'LL'), 'days');
                let daysDiff: number = moment(clientDate.toString()).startOf('day').diff(moment().startOf('day'), 'days');



                let dateString: string = '';


                if (clientDate.format('LL') == today) {

                    dateString = 'Today';// ComponentState.getTodayLocaleString();

                }

                else if (clientDate.format('LL') == yesterday) {

                    // this.translate.get('ChatYesterday').subscribe((text: string) => {

                    // dateString = text;

                    // });

                    dateString = 'Yesterday';// ComponentState.getYesterdayLocaleString();

                }

                else if ((daysDiff <= -2) && (daysDiff >= -6)) {

                    dateString = clientDate.format('dddd');

                }

                else {

                    dateString = DateTimeHelper.getLocaleFormatDateTime(clientDate.toISOString(), dateTimeStyle.trim(), culture);

                }
                return dateString;

            }

        } catch (ex) {

            //this.errorHandler.handledError(ex, 'TaskDateTimeFormatterPipe.transform');

        }





    }

    // tslint:disable-next-line:eofline
}