//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { Pipe, PipeTransform } from '@angular/core';
import { CountryStateHelper } from '../helpers/countrystate.helper';

@Pipe({
    name: 'CountryFormatterPipe'
})

export class CountryFormatterPipe implements PipeTransform {

    public arrCountryNameList?: any[]; // Country name list

    constructor() { }

    transform(value: string) {
        try {
            this.arrCountryNameList = CountryStateHelper.getSupportedCountry();

            for (const arrCountry of this.arrCountryNameList) {
                if (value === arrCountry.CountryCode) {
                    return arrCountry.CountryName;
                }
            }

        } catch (ex) {

        }
    }

}
