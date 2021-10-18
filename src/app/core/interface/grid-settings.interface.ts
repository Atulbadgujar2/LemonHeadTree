//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { State, DataResult } from "@progress/kendo-data-query";
import { ColumnSettings } from "./column-settings.interface";

export interface GridSettings {
    columnsConfig: ColumnSettings[];
    state: State;
    gridData?: any;
    name?:string;
    id?:string;
    default?:boolean
}
