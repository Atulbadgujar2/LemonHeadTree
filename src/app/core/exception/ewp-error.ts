//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


import { EwpErrorData } from "./ewp-error-data";




export class EwpError {

   /// <summary>
    /// Error type indicate the type of error. It may be validation, system error.
    /// </summary>   
    public  ErrorType:number | undefined;

    /// <summary>
    /// Message array hold the array of messages to show.
    /// </summary>       
    public MessageList:Array<string> | undefined;


    /// <summary>
    /// The ewp error data list.
    /// </summary>   
    public  EwpErrorDataList?:Array<EwpErrorData>;
}