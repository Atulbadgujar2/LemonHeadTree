//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import * as moment from 'moment';
import 'moment-timezone';
import { DateFilterEnum } from '../enum/datefilter.enum';
import { ListDateFilterEnum } from '../enum/listDateFilter.enum';

import * as Collections from 'typescript-collections';

// Enum for Date Format(Long,Short,Medium and DayMonth)
export enum DateStyle {
    None = 0,

    /// <summary>
    /// Date Style for Long Date Pattern.
    /// </summary>
    Long = 1,

    /// <summary>
    /// Date Style for Date,Month,Year.
    /// </summary>
    Medium = 2,

    /// <summary>
    /// Date Style for Short Date Pattern.
    /// </summary>
    Short = 3,

    /// <summary>
    /// Date Style for Day and Month without Year.
    /// </summary>
    DayMonth = 4,

    // Nitin:
    /** Date style for Weekday (like Tuesday) and time in 12 hour format (like 5:30 AM) */
    WeekDayWithTime = 5,

    CustomFormat = 6

}


export enum TimeStyle {
    None = 0,

    /// <summary>
    /// Time Style for Long Time Pattern
    /// </summary>
    Long = 1,

    /// <summary>
    /// Time Style for Short Time Pattern
    /// </summary>
    Short = 2
}

// Set Language Constant in case of localization
export namespace LanguageConstants {
    export const SupportedLanguageList: Array<string> = ['en', 'en-US', 'hi', 'ar-sa', 'ar', 'es-MX', 'es'];
    export const SupportedDefaultLanguage: string = 'en';
    // This constant is initialized in AppLocaleHelper constructor.
    export const LanguageDefaultRegion: Collections.Dictionary<string, string> = new Collections.Dictionary<string, string>();
    LanguageDefaultRegion.setValue('en', 'US');
    LanguageDefaultRegion.setValue('hi', 'IN');
    LanguageDefaultRegion.setValue('ar', 'sa');
}

// Set date time format
export namespace DateTimeFormatConstants {
    export const LongDateFormat: string = 'LL'; // "dd MMMM yyyy";
    export const MediumDateFormat: string = 'll'; // "dd MMM yyyy";
    export const ShortDateFormat: string = 'L'; // "dd-MM-yyyy";
    export const DayMonthDateFormat: string = 'DD MMMM'; // "dd MMMM";
    export const LongTimeFormat: string = 'LTS'; // "8:30:25 PM"
    export const ShortTimeFormat: string = 'LT'; // "8:30 PM"
    export const WeekDayTimeFormat: string = 'dddd LT'; // "Sunday 8:30 PM"
    export const ISODateTimeFormat: string = 'YYYY-MM-DDTHH:mm:ss';
    export const ISODateOnlyFormat: string = 'YYYY-MM-DDT00:00:00';
}

export namespace TimeZoneFormatContants {
    export const PSTIanaTimeZone: string = 'America/Los_Angeles';
}

export class DateTimeHelper {

    private static validDateFormats: string[] = ['YYYY-MM-DDTHH:mm:ss', 'YYYY-MM-DDThh:mm:ss', 'YYYY-MM-DD hh:mm:ss',
        'MM-DD-YYYY hh:mm:ss', 'DD-MM-YYYY HH:mm:ss', 'DD-MM-YYYY hh:mm:ss', 'YYYY/MM/DD hh:mm:ss',
        'MM/DD/YYYY hh:mm:ss', 'DD/MM/YYYY HH:mm:ss', 'MMMM DD, YYYY h:mm:ss'];

    public static getCurrentTimeZone(): string {
        return moment.tz.guess();
    }

    /**
     * This method returns current UTC datetime in ISO format.
     *
     * @static
     * @returns {string} Current UTC datetime
     * @memberof DateTimeHelper
     */
    public static getCurrentUTCDateTime(): string {
        return moment().utc().toISOString();
    }

    public static getCurrentUTCDateTimeAddDays(daysToAdd: number): string {
        let utcDate = moment().utc().toDate();
        utcDate.setDate(utcDate.getDate() + daysToAdd);
        return utcDate.toISOString();
    }

    public static getCurrentUTCDateTimeMessage(): string {
        return moment().utc().format();
    }
    public static getCurrentMidNightUTCDateTimeAddDays(addDays: number): string {
        return moment().endOf('day').utc().add(addDays, 'days').toString();
    }
    public static getCurrentMidNightUTCDateTime(): string {
        return moment().startOf('day').utc().toString();
    }


    /**
     * Get local timezone current date and time in ISO format.
     *
     * @static
     * @param {boolean} [keepOffset] true to include local timezone offset.
     * @returns {string} returns local date and time in ISO format.
     * @memberof DateTimeHelper
     */
    public static getCurrentDateTime(keepOffset?: boolean): string {
        // return moment().format(DateTimeFormatConstants.ISODateTimeFormat);
        return moment().toISOString(keepOffset);
    }

    // Get IANA date time
    public static GetIANADateTimeFromUTC(ianaTimezone: string, utcDateTime: string, returnFormat: string = '',
        culture: string = ''): string {
        // Check if input timezone is supported by moment library.
        // if (ianaTimezone === '' || momentTZ.tz.zone(ianaTimezone) == null) {
        if (ianaTimezone === '' || moment.tz.zone(ianaTimezone) == null) {
            // Use default timezone defined by application.
            ianaTimezone = DateTimeHelper.getDefaultIANATimeZone();
        }

        // If input culture is empty, use application default language-region (culture).
        if (culture === '') {
            culture = DateTimeHelper.getDefaultLanguageAndRegion();
        }

        // Convert input UTC date-time value to requested timezone.
        let parsedDate: any = moment.utc(utcDateTime).tz(ianaTimezone);

        // If requested format is empty, return default format in requested culture.
        if (returnFormat === '') {
            parsedDate = parsedDate.locale(culture).toString();
        } else {
            parsedDate = parsedDate.locale(culture).format(returnFormat);
        }

        return parsedDate;
    }

    private static getDefaultLanguageAndRegion(): string {
        return 'en-US';
    }

    private static getDefaultIANATimeZone(): string {
        return TimeZoneFormatContants.PSTIanaTimeZone;
    }

    /**
     * Converts source date-time from source IANA timezone to UTC timezone.
     *
     * @static
     * @param {string} sourceIANATimezone IANA time zone of source date-time.
     * @param {string} sourceDateTime Input date-time in source IANA time zone.
     * @param {string} dateFormat date-time format of source date-time.
     * @returns {*} Returns converted UTC date-time.
     * @memberof DateTimeHelper
     */
    public static GetUTCDateTimeFromIANA(sourceIANATimezone: string, sourceDateTime: string, dateFormat: string): any {
        // Check if time zone is exist
        if (sourceIANATimezone === '' || moment.tz.zone(sourceIANATimezone) == null) {
            sourceIANATimezone = TimeZoneFormatContants.PSTIanaTimeZone;
        }

        if (dateFormat !== '') {
            return moment.tz(sourceDateTime, dateFormat, sourceIANATimezone).utc();
        }
        else {
            return moment.tz(sourceDateTime, this.validDateFormats, sourceIANATimezone).utc();
        }
    }

    /**
     * Calculates time difference from first timezone to second timezone in minutes.
     *
     * @static
     * @param {string} First IANA time zone name.
     * @param {string} Second IANA time zone name.
     * @returns {number} Returns offset value between first and second time zone.
     * This value is calculated by substracting from first to second time zone offset.
     * @memberof DateTimeHelper
     */
    public static GetTimeDiffBetweenTimezones(firstTZ: string, secondTZ: string): number {
        const homeTZOffset: number = moment.tz(firstTZ).utcOffset();
        const otherTZOffset: number = moment.tz(secondTZ).utcOffset();

        const diff: number = homeTZOffset - otherTZOffset;

        // if (homeTZOffset >= otherTZOffset) {
        //     // return ('-' + moment('2017-01-01').locale(userOtherInfo.Culture).minutes(Math.abs(diff)).format('H:mm'));
        // } else {
        //     // return (moment('2017-01-01').locale(userOtherInfo.Culture).minutes(Math.abs(diff)).format('H:mm'));
        // }
        return diff;
    }

    public static ShowSignForTimeDiffBetweenTimezones(firstTZ: string, secondTZ: string): string {
        const homeTZOffset: any = moment.tz(firstTZ).utcOffset();
        const otherTZOffset: any = moment.tz(secondTZ).utcOffset();
        const diff: number = homeTZOffset - otherTZOffset;

        if (homeTZOffset < otherTZOffset) {
            if (diff === 0) {
                return '0';
            } else {
                return '+';
            }
        } else {
            if (diff === 0) {
                return '0';
            } else {
                return '';
            }
        }
    }


    //     /**
    //    * This method returns current week's Monday date and time (as string) in ISO format.
    //    * Ex. Current time is Friday, July 21 2017 15:37:15 in PST time zone.
    //    * If timepart is some value like "05:00:00" return value is 2017-07-17T05:00:00 otherwise return value is 2017-07-17T15:37:15
    //    * If convertToUTC is true final date like 2017-07-17T00:00:00 will be converted to UTC i.e. 2017-07-17T07:00:00.
    //    * @param timePart If this part is provided in return value current timepart replace with this
    //    * otherwise method returns date with current time part.
    //    * @param convertToUTC If false returned value is according to current timezone otherwise converted in UTC.
    //
    /**
    * This method returns current week's Monday date and time (as string) in ISO format.
    * Ex. Current time is Friday, July 21 2017 15:37:15 in PST time zone.
    * If timepart is some value like "05:00:00" return value is 2017-07-17T05:00:00 otherwise return value is 2017-07-17T15:37:15
    * If convertToUTC is true final date like 2017-07-17T00:00:00 will be converted to UTC i.e. 2017-07-17T07:00:00.
    *
    * @static
    * @param {string} [timePartFormat=''] If this part is provided in return value current timepart replace with this
    * otherwise method returns date with current time part.
    * @param {boolean} [convertToUTC=true] If false returned value is according to current timezone otherwise converted in UTC.
    * @returns {string}
    * @memberof DateTimeHelper
    */
    public static getCurrentWeekStartDate(timePartFormat: string = '', convertToUTC: boolean = true): string {
        let weekStartDateTime: string;
        if (timePartFormat !== '') {
            weekStartDateTime = moment().isoWeekday('Monday').format('YYYY-MM-DD[T' + timePartFormat + ']');
        }
        else {
            weekStartDateTime = moment().isoWeekday('Monday').format(DateTimeFormatConstants.ISODateTimeFormat);
        }

        if (convertToUTC) {
            weekStartDateTime = moment(weekStartDateTime).utc().format(DateTimeFormatConstants.ISODateTimeFormat);
        }
        return weekStartDateTime;
    }

    /**
    * This method returns current week's Sunday date and time (as string) in ISO format.
    * Ex. Current time is Friday, July 21 2017 15:37:15 in PST time zone.
    * If timepart is some value like "05:00:00" return value is 2017-07-23T05:00:00 otherwise return value is 2017-07-23T15:37:15
    * If convertToUTC is true final date like 2017-07-23T00:00:00 will be converted to UTC i.e. 2017-07-23T07:00:00.
    * @param timePart If this part is provided in return value current timepart replace with this otherwise method returns date with current time part.
    * @param convertToUTC If false returned value is according to current timezone otherwise converted in UTC.
    */
    public static getCurrentWeekSundayDate(timePart: string = '', convertToUTC: boolean = true): string {
        let weekEndDateTime: string;
        if (timePart !== '') {
            weekEndDateTime = moment().isoWeekday('Sunday').format('YYYY-MM-DD[T' + timePart + ']');
        }
        else {
            weekEndDateTime = moment().isoWeekday('Sunday').format(DateTimeFormatConstants.ISODateTimeFormat);
        }
        if (convertToUTC) {
            weekEndDateTime = moment(weekEndDateTime).utc().format(DateTimeFormatConstants.ISODateTimeFormat);
        }
        return weekEndDateTime;
    }
    /**

* This method add provided number of days in source date.
* Ex.
* sourceDate = Friday, July 21 2017 15:30:15 in PST time zone and no. of days = 2
* timepart = "05:00"
* converToUTC = true
* This method returns 2017-07-19T12:00:00.0000
* @param sourceDate Source date to add given number of days.
* @param noOfDays Number of days to be add in source date. If negative value is provided same number of days subtract from source date.
* @param timePart (Optional) Time part that will overrided inplace of time part of source date.
* @param convertToUTC (Optional) If true converts date into UTC otherwise same date is return.
*/
    public static addDays(sourceDate: string, noOfDays: number, timePart: string, convertToUTC: boolean = true) {

        let weekEndDateTime: string;
        if (timePart !== '') {
            weekEndDateTime = moment.utc(sourceDate).add(noOfDays, 'days').format('YYYY-MM-DD[T' + timePart + ']');
        } else {
            weekEndDateTime = moment.utc(sourceDate).add(noOfDays, 'days').format(DateTimeFormatConstants.ISODateTimeFormat);
        }
        if (convertToUTC) {
            weekEndDateTime = moment(weekEndDateTime).utc().format(DateTimeFormatConstants.ISODateTimeFormat);
        }
        return weekEndDateTime;
    }


    public static getISOFormatDate(date: string): string {
        return moment.utc(date).format(DateTimeFormatConstants.ISODateTimeFormat);
    }

    public static isCurrentDate(dateInLocal: string): boolean {
        const currentDate: string = moment(new Date()).format('MM-DD-YYYY');
        const x = moment(currentDate, 'MM-DD-YYYY');
        const sourceDate = moment(dateInLocal).format('MM-DD-YYYY');
        return x.isSame(sourceDate);
    }

    public static dateDiffFromCurrentDateInDays(dateInLocal: string): number {
        const currentDate: string = moment(new Date()).format('MM-DD-YYYY');
        dateInLocal = moment(dateInLocal).format('MM-DD-YYYY');
        const x: any = moment(currentDate, 'MM-DD-YYYY');
        const y: any = moment(dateInLocal, 'MM-DD-YYYY');
        return x.diff(y, 'days'); // 1
    }

    public static dateDiffFromCurrentDateInSeconds(dateInLocal: string): number {
        const currentDate: string = moment(new Date()).format('MM-DD-YYYY HH:mm:ss');
        const ms: any = moment(currentDate, 'MM-DD-YYYY HH:mm:ss').diff(moment(dateInLocal, 'MM-DD-YYYY HH:mm:ss'));
        const d: any = moment.duration(ms);
        return d.asSeconds();
    }

    public static dateDiffrenceInHours(date1: string, date2: string): number {
        return moment(date1).diff(moment(date2, DateTimeFormatConstants.ISODateTimeFormat), 'hours');
    }

    public static addHours(sourceDate: string, noOfhours: number) {
        let weekEndDateTime: string;
        noOfhours = noOfhours + moment.utc(sourceDate).hours();
        weekEndDateTime = moment.utc(sourceDate).set({ hours: noOfhours }).format(DateTimeFormatConstants.ISODateTimeFormat);
        return weekEndDateTime;
    }

    // // Another method to add/subtract no. Of days in given day
    // public static NtpOffset(clientRequestNTP: number, clientResponseNTP: number, serverNTP: number): number {

    //     let ntpOffset: number = ((serverNTP - clientRequestNTP) + (serverNTP - clientResponseNTP)) / 2;
    //     LocalStorageService.setNtpOffset(ntpOffset / 1000);
    //     LocalStorageService.setNtpOffsetInMiliseconds(ntpOffset);
    //     return ntpOffset;
    // }

    // public static AccurateUTCDateTime(): any {
    //     let utcDateTime: number = Number(DateTimeHelper.getCurrentUTCDateTimeInUnixMS()); // moment.utc(this.getCurrentUTCDateTime()).toDate().getTime();
    //     let time: number = utcDateTime + Number(LocalStorageService.getNtpOffsetInMiliseconds());
    //     return moment.utc(time).toISOString();
    // }

    public static getCurrentUTCDateTimeInUnixMS(): any {
        return moment().utc().locale('en').format('x');
    }

    public static getUTCDateTimeInUnixMS(utcISODate: string): any {
        return moment.utc(utcISODate).locale('en').format('x');
    }

    /**
     * This method format input date-time value to requested format according to given locale.
     * @static
     * @param {string} dateTime Input date-time value to format.
     * @param {string} format DateTime format. This format is according to moment locale format specifications.
     * @param {string} locale Locale in form of 'Language-Region' like 'hi-IN'
     * @returns Formatted value according to input format and locale.
     * @memberof DateTimeHelper
     */
    public static getLocaleFormatDateTime(dateTime: string, format: string, locale: string) {
        return moment.utc(dateTime).locale(locale).format(format);
    }


    public static getDateTimeFormatString(dateStyle: DateStyle = DateStyle.None, timeStyle: TimeStyle = TimeStyle.None): string {
        let styleFormat: string = '';
        // Return Date Format
        if (dateStyle !== null && dateStyle !== undefined) {
            switch (dateStyle) {
                case DateStyle.None:
                    styleFormat = '';
                    break;
                case DateStyle.Long:
                    styleFormat = DateTimeFormatConstants.LongDateFormat;
                    break;
                case DateStyle.Medium:
                    styleFormat = DateTimeFormatConstants.MediumDateFormat;
                    break;
                case DateStyle.Short:
                    styleFormat = DateTimeFormatConstants.ShortDateFormat;
                    break;
                case DateStyle.DayMonth:
                    styleFormat = DateTimeFormatConstants.DayMonthDateFormat;
                    break;
                case DateStyle.WeekDayWithTime:
                    styleFormat = DateTimeFormatConstants.WeekDayTimeFormat;
                    break;
            }
        }

        // Return Time Format
        if (timeStyle !== null && timeStyle !== undefined) {
            switch (timeStyle) {
                case TimeStyle.None:
                    styleFormat = '';
                    break;
                case TimeStyle.Long:
                    styleFormat = DateTimeFormatConstants.LongTimeFormat;
                    break;
                case TimeStyle.Short:
                    styleFormat = DateTimeFormatConstants.ShortTimeFormat;
                    break;
            }
        }

        return styleFormat;


    }

    public static getFormattedDate(inputDate: string, inputDateFormat: string, outputDateFormat: string, locale: string) {
        if (inputDateFormat !== '') {
            if (locale !== '') {
                return moment(inputDate, inputDateFormat).locale(locale).format(outputDateFormat);
            }
            else {
                return moment(inputDate, inputDateFormat).format(outputDateFormat);
            }
        } else {
            if (locale !== '') {
                return moment(inputDate, this.validDateFormats).locale(locale).format(outputDateFormat);
            }
            else {
                return moment(inputDate, this.validDateFormats).format(outputDateFormat);
            }
        }
    }

    /**
     * This method returns true if provided timezone is a valid timezone otherwise return false.
     * @static
     * @param {string} timezone a timezone to be validate.
     * @returns true if timezone is valid.
     * @memberof DateTimeHelper
     */
    public static isValidTimeZone(timezone: string) {
        return (moment.tz(timezone).tz() !== undefined);
    }
    /**
     * This method evaluates utc offset of provided iana time zone.
     *
     * @static
     * @param {string} ianazTimeZone IANA time zone to be evaluate UTC offset.
     * @returns {number} returns UTC offset in minutes.
     * @memberof DateTimeHelper
     */
    public static getTimeZoneUTCOffset(ianazTimeZone: string): number {
        return moment.tz(ianazTimeZone).utcOffset();
    }

    public static getFormattedTimeDifference(timeDifference: number, format: string = 'H:mm', userCulture: string = 'en'): string {
        return moment('2017-01-01').locale(userCulture).minutes(Math.abs(timeDifference)).format(format);
    }

    public static getDateTimeByFilterType(filterType: number): Date {
        let date: any;
        let rtndate:any;
        switch (filterType) {
            case DateFilterEnum.LastWeek:
                //First Day of last week
                var daystoLastMonday = 0 - (1 - moment().isoWeekday()) + 7;
                date = moment().subtract('days', daystoLastMonday).toDate();
                break;
            case DateFilterEnum.LastMonth:
                //First Day of last month
                // date = moment().startOf('month').toDate();
                date = moment(new Date()).subtract(1, 'months').toDate();
                break;
            case DateFilterEnum.Last3Month:
                //last three month first date
                //var dateFromlastthreemonth = moment(new Date()).subtract(4,'months').endOf('month').format('DD-MM-YYYY');
                //date = moment(new Date()).subtract(3, 'months').startOf('month').toDate();
                date = moment(new Date()).subtract(3, 'months').toDate();
                break;
            case DateFilterEnum.Last6Month:
                //last Six month first date
                //var dateFromlastthreemonth = moment(new Date()).subtract(4,'months').endOf('month').format('DD-MM-YYYY');
                // date = moment(new Date()).subtract(6, 'months').startOf('month').toDate();
                date = moment(new Date()).subtract(6, 'months').toDate();
                break;
            case DateFilterEnum.ThisYear:
                //last year month first date
                //var dateFromlastthreemonth = moment(new Date()).subtract(4,'months').endOf('month').format('DD-MM-YYYY');
                date = moment(new Date()).subtract(11, 'months').startOf('month').toDate();
                break;
            default:
        }
        return rtndate;
    }

    // Get From-Date By Date Filter Type
    public static getFromDateByFilterTypeNew(filterType: number, timeZone: string): any {
        let fromDate: any;

        switch (filterType) {
            case ListDateFilterEnum.ThisMonth:
                // This Month
                const dateString = moment.tz(timeZone).startOf('month').set({ h: 0, m: 0, s: 0 });
                fromDate = moment.tz(dateString, timeZone);
                break;
            case ListDateFilterEnum.Last30Days:
                // Last 30-Days
                fromDate = moment.tz(timeZone).add(-30, 'days').set({ h: 0, m: 0, s: 0 });
                // this.GetUTCDateTimeFromIANA(timeZone, moment().add(-30, 'days').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.LastMonth:
                // Last-Month
                // tslint:disable-next-line:max-line-length
                fromDate = moment.tz(timeZone).startOf('month').subtract(1, 'months').set({ h: 0, m: 0, s: 0 });
                // this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').subtract(1, 'months').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.ThisQuater:
                // This-Quater
                fromDate = moment.tz(timeZone).startOf('quarter').set({ h: 0, m: 0, s: 0 });
                // this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('quarter').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.Last90Days:
                // Last 90-Days
                fromDate = moment.tz(timeZone).add(-90, 'days').set({ h: 0, m: 0, s: 0 });
                //this.GetUTCDateTimeFromIANA(timeZone, moment().add(-90, 'days').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.LastQuater:
                // Last Quater
                // tslint:disable-next-line:max-line-length
                fromDate = moment.tz(timeZone).startOf('quarter').subtract(1, 'quarter').set({ h: 0, m: 0, s: 0 });
                // this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('quarter').subtract(1, 'quarter').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.ThisYear:
                // This Year
                fromDate = moment.tz(timeZone).startOf('year').set({ h: 0, m: 0, s: 0 });
                // this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('year').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.Last6Month:
                // Last 6 Month
                // tslint:disable-next-line:max-line-length
                // fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').subtract(6, 'months').format('YYYY-MM-DD 00:00:00'), '').toDate();
                fromDate = moment.tz(timeZone).subtract(6, 'months').set({ h: 0, m: 0, s: 0 });
                // this.GetUTCDateTimeFromIANA(timeZone, moment().subtract(6, 'months').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            default:
        }
        return fromDate;
    }


    // Get From-Date By Date Filter Type
    public static getFromDateByFilterType(filterType: number, timeZone: string): Date {
        let fromDate:any

        switch (filterType) {
            case ListDateFilterEnum.ThisMonth:
                // This Month
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.Last30Days:
                // Last 30-Days
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().add(-30, 'days').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.LastMonth:
                // Last-Month
                // tslint:disable-next-line:max-line-length
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').subtract(1, 'months').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.ThisQuater:
                // This-Quater
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('quarter').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.Last90Days:
                // Last 90-Days
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().add(-90, 'days').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.LastQuater:
                // Last Quater
                // tslint:disable-next-line:max-line-length
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('quarter').subtract(1, 'quarter').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.ThisYear:
                // This Year
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('year').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            case ListDateFilterEnum.Last6Month:
                // Last 6 Month
                // tslint:disable-next-line:max-line-length
                fromDate = this.GetUTCDateTimeFromIANA(timeZone, moment().subtract(6, 'months').format('YYYY-MM-DD 00:00:00'), '').toDate();
                break;
            default:
        }
        return fromDate;
    }

     // Get TO-Date By Date Filter Type
     public static getToDateByFilterTypeNew(filterType: number, timeZone: string): Date {
        let toDate: any;

        switch (filterType) {
            case ListDateFilterEnum.ThisMonth:
                // This Month
                toDate = moment.tz(timeZone).set({ h: 23, m: 59, s: 59 });
                break;
            case ListDateFilterEnum.Last30Days:
                // Last 30-Days
                toDate = moment.tz(timeZone).set({ h: 23, m: 59, s: 59 });
                break;
            case ListDateFilterEnum.LastMonth:
                // Last-Month
                // tslint:disable-next-line:max-line-length
                toDate = moment.tz(timeZone).startOf('month').subtract(1, 'days').set({ h: 23, m: 59, s: 59 });
                break;
            case ListDateFilterEnum.ThisQuater:
                // This-Quater
                toDate = moment.tz(timeZone).set({ h: 23, m: 59, s: 59 });     //.endOf('quarter').set({ h: 23, m: 59, s: 59 });
                //this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.Last90Days:
                // Last 90-Days
                toDate = moment.tz(timeZone).set({ h: 23, m: 59, s: 59 });
                //  this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.LastQuater:
                // Last Quater
                // tslint:disable-next-line:max-line-length
                toDate = moment.tz(timeZone).startOf('month').subtract(1, 'quarter').endOf('quarter');
                // this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').subtract(1, 'quarter').endOf('quarter').format('YYYY-MM-DD 23:59:59'), '').toDate();
                break;
            case ListDateFilterEnum.ThisYear:
                // This Year
                toDate = moment.tz(timeZone).set({ h: 23, m: 59, s: 59 });
                // this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.Last6Month:
                // Last 6 Month
                // tslint:disable-next-line:max-line-length
                toDate = moment.tz(timeZone).set({ h: 23, m: 59, s: 59 });
                //this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            default:
        }
        return toDate;
    }

    // Get TO-Date By Date Filter Type
    public static getToDateByFilterType(filterType: number, timeZone: string): Date {
        let toDate: any;

        switch (filterType) {
            case ListDateFilterEnum.ThisMonth:
                // This Month
                toDate = this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.Last30Days:
                // Last 30-Days
                toDate = this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.LastMonth:
                // Last-Month
                // tslint:disable-next-line:max-line-length
                toDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').subtract(1, 'months').endOf('month').format('YYYY-MM-DD 23:59:59'), '').toDate();
                break;
            case ListDateFilterEnum.ThisQuater:
                // This-Quater
                toDate = this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.Last90Days:
                // Last 90-Days
                toDate = this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.LastQuater:
                // Last Quater
                // tslint:disable-next-line:max-line-length
                toDate = this.GetUTCDateTimeFromIANA(timeZone, moment().startOf('month').subtract(1, 'quarter').endOf('quarter').format('YYYY-MM-DD 23:59:59'), '').toDate();
                break;
            case ListDateFilterEnum.ThisYear:
                // This Year
                toDate = this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            case ListDateFilterEnum.Last6Month:
                // Last 6 Month
                // tslint:disable-next-line:max-line-length
                toDate = this.GetUTCDateTimeFromIANA(timeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
                break;
            default:
        }
        return toDate;
    }

    // Get Last 30-Days Default Date
    public static getDefaultLast30Days(currentTimeZone: string): Date {
        // tslint:disable-next-line:max-line-length
        const last30days = this.GetUTCDateTimeFromIANA(currentTimeZone, moment().add(-30, 'days').format('YYYY-MM-DD 00:00:00'), '').toDate();
        return last30days;
    }

    // Get Last 6-Month Default Date
    public static getDefaultLast6Month(currentTimeZone: string): Date {
        // tslint:disable-next-line:max-line-length
        const last6Month = this.GetUTCDateTimeFromIANA(currentTimeZone, moment().subtract(6, 'months').format('YYYY-MM-DD 00:00:00'), '').toDate();
        return last6Month;
    }

    // Get Current Default Date
    public static getCurrentDays(currentTimeZone: string): Date {
        // tslint:disable-next-line:max-line-length
        const currentDate = this.GetUTCDateTimeFromIANA(currentTimeZone, (moment(new Date()).format('YYYY-MM-DD 23:59:59')), '').toDate();
        return currentDate;
    }

    public static dateDiffrenceInDays(date1: string, date2: string): number {
        const fromDate = moment(date1);
        const toDate = moment(date2);
        return fromDate.diff(toDate, 'days');
        // return moment(date1).diff(moment(date2, DateTimeFormatConstants.ISODateTimeFormat), 'days');
    }

}
  // public static GetLongFormattedDate(dateValue: string): any {
    //     return moment.utc(dateValue).locale(LocalStorageService.getUserOtherInfo().Culture).format(DateTimeFormatConstants.LongDateFormat);
    // }

    // public static GetMediumFormattedDate(dateValue: string): any {
    //     let userInfo: UserSession = LocalStorageService.getUserOtherInfo();
    //     return moment.utc(dateValue).locale(userInfo.Culture).format(DateTimeFormatConstants.MediumDateFormat);
    // }

    // public static GetShortFormattedDate(dateValue: string): any {
    //     return moment.utc(dateValue).locale(LocalStorageService.getUserOtherInfo().Culture).format(DateTimeFormatConstants.ShortDateFormat);
    // }

    // public static GetDayMonthFormattedDate(dateValue: string): any {
    //     return moment.utc(dateValue).locale(LocalStorageService.getUserOtherInfo().Culture).format(DateTimeFormatConstants.DayMonthDateFormat);
    // }

    // public static GetLongFormattedTime(dateValue: string): any {
    //     return moment.utc(dateValue).locale(LocalStorageService.getUserOtherInfo().Culture).format(DateTimeFormatConstants.LongTimeFormat);
    // }

    // public static GetShortFormattedTime(dateValue: string): any {
    //     return moment.utc(dateValue).locale(LocalStorageService.getUserOtherInfo().Culture).format(DateTimeFormatConstants.ShortTimeFormat);
    // }

    // public static GetWeekDayTimeFormat(dateValue: string): any {
    //     return moment.utc(dateValue).locale(LocalStorageService.getUserOtherInfo().Culture).format(DateTimeFormatConstants.WeekDayTimeFormat);
    // }
