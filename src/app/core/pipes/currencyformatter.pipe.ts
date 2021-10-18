//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================

import { PipeTransform, Pipe } from "@angular/core";
// import { LocalStorageService } from "ewapps-lib";

@Pipe({
    name: 'CurrencyFormattorPipe'
})


export class CurrencyFormattorPipe implements PipeTransform {

    constructor() { }

    transform(value: string) {
      
        try {
            let currentCurrencyType = '$';
            const currency = currentCurrencyType + " " + value;
            return currency;
        } catch (ex) {
return ;
        }
    }

}