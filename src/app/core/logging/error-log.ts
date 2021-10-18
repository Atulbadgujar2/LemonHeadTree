// ===============================================================================
// © 2015 eWorkplace Apps.  All rights reserved.
// Original Author: Amit Mundra
// Original Date: 19 November 2018
// ==============================================================================

/**
 * Error log detial model
 */
export class ErrorLog {
    public ErrorDate: string;
    public MethodName: string;
    public ErrorMessage: string;
    public StackTrace: string;
    public LineNo: string;
    public ApplicationName: string;
    public UserId: string;
    public UserName: string;
    public TenantId: string;
    public TenantName: string;
    public Browser: string;
    public BrowserVersion: string;
    public OSName: string;
    public OSVersion: string;
    public Device: string;
    public IpAddress: string;
    public EwpErrorString: string;
}
