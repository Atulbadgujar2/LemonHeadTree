import { LanguageConstants } from "./datetime.helper";

import { environment } from '../../../environments/environment';


// import { SupportPriorityEnum } from "../enum/help-support/status-priority.enum";

//===============================================================================
// © 2015 eWorkplace Apps.  All rights reserved.
// Original Author: Sanjeev Khanna
// Original Date: 10 June 2017
//==============================================================================

/**
 * This class provide common helper methods like Get default values of  IANA timezone,Region,RegionLanguage,Lattitude,Longitude.
 */

/**
 * This class provide common helper methods like Get default values of  IANA timezone,Region,RegionLanguage,Lattitude,Longitude.
 */
export class CommonHelper {


    public static isEmpty(value: any) {
        if (value == null || value == 'undefined' || value == '')
            return true;
        else
            return false;
    }

    /**
    * Convert null to string 
    * @param value Convert string 
    */
    public static convertToString(value: any): string {
        let str: string;
        str = value;
        if (this.isNullString(value)) {
            str = ''
        }
        return str;
    }


    /**
    * Convert string to date
    * @param value Convert string to Date
    */
    public static convertStringToDate(value: string): Date {
        let date: Date;
        date = new Date('1900-01-01T00:00:00');

        if (!this.isNull(value)) {
            if (isNaN(Date.parse(value)) == false) {
                date = new Date(value);
            }
        }
        return date;
    }

    /**
     * String to date with format
     * @param _date 
     * @param _format 
     * @param _delimiter 
     */
    public static stringToDate(_date: any, _format: any, _delimiter: any) {
        var formatLowerCase = _format.toLowerCase();
        var formatItems = formatLowerCase.split(_delimiter);
        var dateItems = _date.split(_delimiter);
        var monthIndex = formatItems.indexOf("mm");
        var dayIndex = formatItems.indexOf("dd");
        var yearIndex = formatItems.indexOf("yyyy");
        var month = parseInt(dateItems[monthIndex]);
        month -= 1;
        
        var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
        return formatedDate;
    }


    /**
     * Converts string to number
     * @param value 
     */
    public static convertStringToNumber(value: string): Number {
        let num: Number;
        num = 0;
        if (!this.isNull(value)) {
            if (isNaN(Number(value)) == false)
                return Number(value);
        }
        return num;
    }

    /**
     * Convert string to boolean.
     */
    public static convertStringToBoolean(value: string): boolean {
        let bool: boolean;
        bool = false;

        if (!this.isNull(value)) {
            bool = (value.toLowerCase() == 'true') || (value.toLowerCase() == '1');
        }
        return bool;
    }

    /**
     * 
     * @param value Check validity of given value
     */
    public static isNull(value: any): boolean {
        if (value == '' || value == 'undefined' || value == null || isNaN(value))
            return true;
        else
            return false;
    }


    public static isNullString(value: any): boolean {
        if (value == '' || value == 'undefined' || value == null)
            return true;
        else
            return false;
    }

    // Enum  Operations

    /**
     * Convert string to specified enum
     * @param value 
     */
   // public static stringToEnum<T>(value: string): T {
        // var k: T;
        //var options : string[] = Object.keys(( typeof T)); 
        // var v: T = (k)["offline"];
    //    var val: T;
    //    val = val[value];
   //     return val;
  //  }

    /**
     * Convert enum to string
     * @param value 
     */
   // public static enumToString<T>(value: T): string {

        // var a: T
        // var str = value.toString();
        // var p = (a)[str];
     //   return (<T>value)[value.toString()];
   // }

    public static GenrateNewGuid() {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now();; //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    public static getEmptyGuid() {
        return '00000000-0000-0000-0000-000000000000';
    }

    static getBrowserLanguage(): string {
        let locale: string = this.getBrowserLocale();
        locale = locale.split('-')[0];

        if (LanguageConstants.SupportedLanguageList.findIndex((l) => l === locale) < 0) {
            locale = LanguageConstants.SupportedDefaultLanguage;;
        }

        return locale;
    }

    static getBrowserLocale(): string {
        let locale: string = window.navigator.language;
        if (CommonHelper.isEmpty(locale)) {
            locale = LanguageConstants.SupportedDefaultLanguage;
        }
        return locale;
    }

    static getNamesAndValues<T extends number>(e: any) {
        return CommonHelper.getNames(e).map(n => ({ name: n, value: e[n] as T }));
    }

    static getNames(e: any) {
        return Object.keys(e).filter(k => typeof e[k] === "number") as string[];
    }

    static getValues<T extends number>(e: any) {
        return Object.keys(e)
            .map(k => e[k])
            .filter(v => typeof v === "number") as T[];
    }
    static getEnumValues(enumName: any) {
        let enumTypes: { id: string; name: string; }[] =[]

        //Get name-value pairs from CommonTypeEnum
        let prodTypeEnumList = CommonHelper.getNamesAndValues(enumName);

        //Convert name-value pairs to CommonType[]
        prodTypeEnumList.forEach(pair => {
            let prodType = { 'id': pair.value.toString(), 'name': pair.name };
            enumTypes.push(prodType);
        });

        return enumTypes;
    }

    static getTermAndAlertFrequencyEnumValues() {
        let enumTypes = []
        let prodType = { 'id': TermAndAlertFrequencyEnum.Monthly.toString(), 'name': 'Monthly' };
        enumTypes.push(prodType);
        prodType = { 'id': TermAndAlertFrequencyEnum.Quarterly.toString(), 'name': 'Quarterly' };
        enumTypes.push(prodType);
        prodType = { 'id': TermAndAlertFrequencyEnum.HalfYearly.toString(), 'name': 'Half Yearly' };
        enumTypes.push(prodType);
        prodType = { 'id': TermAndAlertFrequencyEnum.Yearly.toString(), 'name': 'Yearly' };
        enumTypes.push(prodType);

        return enumTypes;
    }

    static getPaymentCycleEnumValues() {
        let enumTypes = []
        let prodType = { 'id': PaymentCycleEnum.Monthly.toString(), 'name': 'Monthly' };
        enumTypes.push(prodType);
        prodType = { 'id': PaymentCycleEnum.Quarterly.toString(), 'name': 'Quarterly' };
        enumTypes.push(prodType);
        prodType = { 'id': PaymentCycleEnum.HalfYearly.toString(), 'name': 'Half Yearly' };
        enumTypes.push(prodType);
        prodType = { 'id': PaymentCycleEnum.Yearly.toString(), 'name': 'Yearly' };
        enumTypes.push(prodType);

        return enumTypes;
    }

    static getCurrencyEnumValues() {
        let enumTypes = []
        let prodType = { 'id': PaymentCycleEnum.Monthly.toString(), 'name': 'Monthly' };
        enumTypes.push(prodType);
        prodType = { 'id': PaymentCycleEnum.Quarterly.toString(), 'name': 'Quarterly' };
        enumTypes.push(prodType);
        prodType = { 'id': PaymentCycleEnum.HalfYearly.toString(), 'name': 'Half Yearly' };
        enumTypes.push(prodType);
        prodType = { 'id': PaymentCycleEnum.Yearly.toString(), 'name': 'Yearly' };
        enumTypes.push(prodType);

        return enumTypes;
    }

    static getRendomPassword(): string {
        var randomstring = Math.random().toString(36).slice(-8);
        return randomstring;
    }
    /**
     * Validate Email
     */
    public static validateEmail(emailID: any): boolean {

        var re = "(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*@\"\")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])"
        //var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
        return String(emailID).search(re) != -1;

        // let atpos = emailID.indexOf("@");
        // let dotpos = emailID.lastIndexOf(".");
        // if (atpos < 1 || (dotpos - atpos < 2)) {
        //     return false;
        // }
        // return (true);
    }
    /**
     * Validate Email
     */
    public static validatePassword(password: string): boolean {

        var regEx = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
        //var re = "(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*@\"\")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])"
        return String(password).search(regEx) != -1;
    }
    public static getTheme(key: string): string {
        switch (key.toLowerCase()) {
            case "business":
                return "business-theme";

            case "elegant":
                return "elegant-theme";

            case "light":
                return "light-theme";

        }
        return "";
    }

    public static getThemeImage(key: string): string {
        switch (key.toLowerCase()) {
            case "business":
                return "assets/images/themes/business-theme.png";
            //break
            case "elegant":
                return "assets/images/themes/elegant-theme.png";
            //break
            case "light":
                return "assets/images/themes/light-theme.png";
            // break          
        }
        return ""
    }

    public static getSubdomain() {
        let subdomain: string = '';
        const domain = window.location.hostname;
        if (domain.indexOf('.') < 0 ||
            domain.split('.')[0] === 'example' || domain.split('.')[0] === 'lvh' || domain.split('.')[0] === 'www') {
            subdomain = '';
        } else {
            subdomain = domain.split('.')[0];
        }
        return subdomain;
    }



    static getSupportCurrencyEnumValues() {
        const enumTypes = [];
        let prodType = { 'CurrencyId': CurrencyEnum.None.toString(), 'CurrencyName': 'To be set by business' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.USDollar.toString(), 'CurrencyName': 'United States Dollar USD $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.ArgentinaPeso.toString(), 'CurrencyName': 'Argentina Peso ARS $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.AustraliaDollar.toString(), 'CurrencyName': 'Australia Dollar AUD $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.BahamasDollar.toString(), 'CurrencyName': 'Bahamas Dollar BSD $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.BoliviaBolíviano.toString(), 'CurrencyName': 'Bolivia Bolíviano BOB $b' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.BrazilReal.toString(), 'CurrencyName': 'Brazil Real BRL R$' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.CanadaDollar.toString(), 'CurrencyName': 'Canada Dollar CAD $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.ChilePeso.toString(), 'CurrencyName': 'Chile Peso CLP $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.ChinaYuanRenminbi.toString(), 'CurrencyName': 'China Yuan Renminbi CNY ¥' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.ColombiaPeso.toString(), 'CurrencyName': 'Colombia Peso COP $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.CubaPeso.toString(), 'CurrencyName': 'Cuba Peso CUP ₱' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.DenmarkKrone.toString(), 'CurrencyName': 'Denmark Krone DKK kr' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.EgyptPound.toString(), 'CurrencyName': 'Egypt Pound EGP £' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.ElSalvadorColon.toString(), 'CurrencyName': 'El Salvador Colon SVC $', };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.Euro.toString(), 'CurrencyName': 'European Countries Euro €' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.HongKongDollar.toString(), 'CurrencyName': 'Hong Kong Dollar HKD $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.IndianRupee.toString(), 'CurrencyName': 'Indian Rupee INR ₹' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.JapanYen.toString(), 'CurrencyName': 'Japan Yen JPY ¥' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.LebanonPound.toString(), 'CurrencyName': 'Lebanon Pound LBP £' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.MauritiusRupee.toString(), 'CurrencyName': 'Mauritius Rupee MUR ₨' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.MexicoPeso.toString(), 'CurrencyName': 'Mexico Peso MXN $' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.QatarRiyal.toString(), 'CurrencyName': 'Qatar Riyal QAR ﷼' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.RussiaRuble.toString(), 'CurrencyName': 'Russia Ruble RUB ₽' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.SaudiArabiaRiyal.toString(), 'CurrencyName': 'Saudi Arabia Riyal SAR ﷼' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.SouthAfricaRand.toString(), 'CurrencyName': 'South Africa Rand ZAR R' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.SwitzerlandFranc.toString(), 'CurrencyName': 'Switzerland Franc CHF ₣' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.TurkeyLira.toString(), 'CurrencyName': 'Turkey Lira TRY ₺' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.Pound.toString(), 'CurrencyName': 'United Kingdom Pound GBP £' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.VenezuelaBolívar.toString(), 'CurrencyName': 'Venezuela Bolívar VEF Bs' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyId': CurrencyEnum.YemenRial.toString(), 'CurrencyName': 'Yemen Rial YER ﷼' };
        enumTypes.push(prodType);
        return enumTypes;
    }

    /**
     *  const SupportedCurrencySep = [
                {
                    'CurrencySeperator': '‘,’ (comma) & ‘.’ (dot)',
                    'CurrencySeperatorId': '1'
                },
                {
                    'CurrencySeperator': '‘.’ (dot) & ‘,’ (comma)',
                    'CurrencySeperatorId': '2'
                }
            ];
     */
    static getSupportedCurrencySeperatorEnumList() {
        const enumTypes = [];
        let prodType = { 'CurrencySeperatorId': CurrencySeperatorEnum.None.toString(), 'CurrencySeperator': 'To be set by business' };
        enumTypes.push(prodType);
        prodType = {
            'CurrencySeperatorId': CurrencySeperatorEnum.CommaAndDot.toString(),
            'CurrencySeperator': '‘,’ (comma) & ‘.’ (dot)'
        };
        enumTypes.push(prodType);
        prodType = { 'CurrencySeperatorId': CurrencySeperatorEnum.DotAndComma.toString(), 'CurrencySeperator': '‘.’ (dot) & ‘,’ (comma)' };
        enumTypes.push(prodType);
        return enumTypes;
    }

    public static getSupportedCurrencyGroupingEnumList(): any {
        const enumTypes = [];
        let prodType = { 'CurrencyGroupingId': CurrencyGroupingEnum.None.toString(), 'CurrencyGrouping': 'To be set by business' };
        enumTypes.push(prodType);
        prodType = {
            'CurrencyGroupingId': CurrencyGroupingEnum.Threee.toString(),
            'CurrencyGrouping': '3 eg. 100,000'
        };
        enumTypes.push(prodType);
        prodType = { 'CurrencyGroupingId': CurrencyGroupingEnum.Four.toString(), 'CurrencyGrouping': '4 eg. 1000,0000' };
        enumTypes.push(prodType);
        prodType = { 'CurrencyGroupingId': CurrencyGroupingEnum.TwoThree.toString(), 'CurrencyGrouping': '2-3 eg. 10,000' };
        enumTypes.push(prodType);
        return enumTypes;
    }

    public static getSupportedDecimalFractionEnumList(): any {
        const enumTypes = [];
        let prodType = { 'DecimalFractionId': DecimalFractionEnum.None.toString(), 'DecimalFraction': 'To be set by business' };
        enumTypes.push(prodType);
        prodType = { 'DecimalFractionId': DecimalFractionEnum.Zero.toString(), 'DecimalFraction': '0 eg. 10' };
        enumTypes.push(prodType);
        prodType = { 'DecimalFractionId': DecimalFractionEnum.One.toString(), 'DecimalFraction': '1 eg. 10.2' };
        enumTypes.push(prodType);
        prodType = { 'DecimalFractionId': DecimalFractionEnum.Two.toString(), 'DecimalFraction': '2 eg. 10.20' };
        enumTypes.push(prodType);
        prodType = { 'DecimalFractionId': DecimalFractionEnum.Three.toString(), 'DecimalFraction': '3 eg. 10.201' };
        enumTypes.push(prodType);

        return enumTypes;
    }

    static cloneList(list: any) {
        return JSON.parse(JSON.stringify(list));
    }
}

export enum PaymentCycleEnum {
    Monthly = 1,
    Quarterly = 2,
    HalfYearly = 3,
    Yearly = 4
}

export enum TermAndAlertFrequencyEnum {
    Monthly = 1,
    Quarterly = 2,
    HalfYearly = 3,
    Yearly = 4
}

export enum CurrencyEnum {
    None = 0,
    USDollar = 840,
    Pound = 826,
    Euro = 978,
    IndianRupee = 356,
    ArgentinaPeso = 32,
    AustraliaDollar = 36,
    BahamasDollar = 44,
    BoliviaBolíviano = 68,
    BrazilReal = 986,
    CanadaDollar = 124,
    ChilePeso = 152,
    ChinaYuanRenminbi = 156,
    ColombiaPeso = 170,
    CubaPeso = 192,
    DenmarkKrone = 208,
    EgyptPound = 818,
    ElSalvadorColon = 222,
    HongKongDollar = 344,
    JapanYen = 392,
    LebanonPound = 422,
    MauritiusRupee = 480,
    MexicoPeso = 484,
    QatarRiyal = 634,
    RussiaRuble = 643,
    SaudiArabiaRiyal = 682,
    SouthAfricaRand = 710,
    SwitzerlandFranc = 756,
    TurkeyLira = 949,
    VenezuelaBolívar = 937,
    YemenRial = 886
}

export enum CurrencySeperatorEnum {
    None = 0,
    CommaAndDot = 1,
    DotAndComma = 2
}

export enum CurrencyGroupingEnum {
    None = 0,
    Threee = 3,
    Four = 4,
    TwoThree = 2
}

export enum DecimalFractionEnum {
    None = -1,
    Zero = 0,
    One = 1,
    Two = 2,
    Three = 3
}

export enum priceCycleEnum {
    Day = 1,
    Week = 2,
    Month = 3,
    Year = 4,
    Perpetual = 5
}

export enum shipmentCycleEnum {
    Day = 1,
    Week = 2,
    Month = 3,
    Year = 4
}