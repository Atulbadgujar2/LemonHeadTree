//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


export class EwpErrorData {

    /// <summary>
    /// Eexception message.
    /// </summary>    
    public ErrorSubType?: number;

    /// <summary>
    /// Detail information of exception.
    /// </summary>
    public Data: any;

    /// <summary>
    /// Http status code.
    /// </summary>
    public Message: string | undefined;
}