//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


export interface ColumnSettings {
    field: string;
    title?: string;
    filter?: 'string'|'numeric'|'date'|'boolean';
    format?: string;
    width?: number;
    _width?: number;
    filterable: boolean;
    orderIndex?: number;
    class?:string;
    media?:string;
    isCheckboxColumn?:boolean;
    showSelectAll?:boolean;
}