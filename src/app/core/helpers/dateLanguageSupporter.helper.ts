//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import * as moment from "moment";

export class DateLanguageSupporterHelper {

    // List Of Supported Language
    private static SupportedLanguageName = [
        // {
        //     "LanguageName": "en-NZ",
        //     "LanguageId": "en"
        // },
        {
            "LanguageName": "Hindi",
            "LanguageId": "hi-IN"
        },
        {
            "LanguageName": "English",
            "LanguageId": "en"
        },
        // {
        //     "LanguageName": "en-MX",
        //     "LanguageId": "en",
        // }
    ];

    // List Of Supported Currency
    private static SupportedCurrencyName = [
        {
            "CurrencyName": "$ US Dollar",
            "CurrencyId": "$"
        },
        {
            "CurrencyName": "£ Pound",
            "CurrencyId": "£"
        },
        {
            "CurrencyName": "₹ Indian Rupee",
            "CurrencyId": "₹"
        },
        {
            "CurrencyName": "€ Euro",
            "CurrencyId": "€"
        }
    ];

    // List Of Supported DateFormat
    public static SupportedDateTimeFormat = [
        {
            DateTimeFormat: 'MM/DD/YYYY',
            DateTimeFormatId: 'MM/DD/YYYY',
            JSDateTimeFormat: 'MM/dd/yyyy'
        },
        {
            DateTimeFormat: 'YYYY-MM-DD',
            DateTimeFormatId: 'YYYY-MM-DD',
            JSDateTimeFormat: 'yyyy-MM-dd'
        },
        {
            DateTimeFormat: 'DD/MM/YYYY',
            DateTimeFormatId: 'DD/MM/YYYY',
            JSDateTimeFormat: 'dd/MM/yyyy'
        },
        {
            DateTimeFormat: 'DD MMMM YYYY',
            DateTimeFormatId: 'DD MMMM YYYY',
            JSDateTimeFormat: 'dd MMMM yyyy'
        },
        {
            DateTimeFormat: 'MMMM DD, YYYY',
            DateTimeFormatId: 'MMMM DD, YYYY',
            JSDateTimeFormat: 'MMMM dd, yyyy'
        }
    ];

    // List Of Supported TimeZone
    private static TimeZoneName : any;

    // Defualt Supported Language
    private static DefualtSupportedLanguage = [
        {
            "LanguageName": "English",
            "LanguageId": "en",
        }
    ];

    // Defualt Supported Currency
    private static DefualtSupportedCurrency = [
        {
            "CurrencyName": "$ US Dollar",
            "CurrencyId": "$",
        }
    ];

    // Defualt Supported DateFormat
    private static DefualtSupportedDateTimeFormat = [
        {
            'DateTimeFormat': 'MM/DD/YYYY',
            'DateTimeFormatId': 'MM/DD/YYYY',
            'JSDateTimeFormat': 'MM/dd/yyyy'
        }
    ];

    // Defualt Supported TimeZone
    private static DefualtSupportedTimeZone = [
        {
            "TimeZone": 'America/Los_Angeles',
            "TimeZoneId": "America/Los_Angeles"
        }
    ];


    // Get Supported Language
    public static getSupportedLanguage() {
        return this.SupportedLanguageName;
    }

    // Get Supported Currency
    public static getSupportedCurrency() {
        return this.SupportedCurrencyName;
    }

    // Get TimeZone List
    public static getSupportedTimeZone() {
        this.TimeZoneName = moment.tz.names();
        //var myJsonString = Object.assign({}, this.TimeZoneName);
        //var myJsonString = JSON.stringify(this.TimeZoneName);
        return this.TimeZoneName;
    }

    // Get Supported Date Time Format
    public static getSupportedDateTimeFormat() {
        return this.SupportedDateTimeFormat;
    }


     // Get Defualt Supported Language
     public static getDefualtSupportedLanguage() {
        return this.DefualtSupportedLanguage;
    }

    // Get Defualt Supported Currency
    public static getDefualtSupportedCurrency() {
        return this.DefualtSupportedCurrency;
    }

    // Get Defualt TimeZone List
    public static getDefualtSupportedTimeZone() {
        this.TimeZoneName = moment.tz.names();
        //var myJsonString = Object.assign({}, this.TimeZoneName);
        //var myJsonString = JSON.stringify(this.TimeZoneName);
        return this.DefualtSupportedTimeZone;
    }

    // Get Defualt Supported Date Time Format
    public static getDefualtSupportedDateTimeFormat(): any {
        return this.DefualtSupportedDateTimeFormat[0];
    }

}
