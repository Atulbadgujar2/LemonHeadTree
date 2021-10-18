//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================

/// <summary>
/// Defines enum for System Error Sub Type.
/// </summary>
export enum SystemErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// Connection TimeOut
    /// </summary>
    ConnectionTimeOut = 1
}

/// <summary>
/// Defines enum for InvalidVersion Error Sub Type.
/// </summary>
export enum InvalidVersionErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// Database Version
    /// </summary>
    DatabaseVersion = 1,

    /// <summary>
    /// App Suite Version
    /// </summary>
    AppSuiteVersion = 2,

    /// <summary>
    /// Application Version
    /// </summary>
    ApplicationVersion = 3
}

/// <summary>
/// Defines enum for Database Error Sub Type.
/// </summary>
export enum DatabaseErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// Connection TimeOut
    /// </summary>
    ConnectionTimeOut = 1,

    /// <summary>
    /// SQL Login
    /// </summary>
    SQLLogin = 2,

    /// <summary>
    /// Transaction
    /// </summary>
    Transaction = 3,

    /// <summary>
    /// Deadlock
    /// </summary>
    Deadlock = 4
}

/// <summary>
/// Defines enum for Authentication Error Sub Type.
/// </summary>
export enum AuthenticationErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// Invalid login token
    /// </summary>
    InvalidLoginToken = 1,

    /// <summary>
    /// Invalid Email
    /// </summary>
    InvalidEmail = 2,

    /// <summary>
    /// Invalid Password
    /// </summary>
    InvalidPassword = 3,

    /// <summary>
    /// User is locked
    /// </summary>
    UserLocked = 4
}

/// <summary>
/// Defines enum for Security Error Sub Type.
/// </summary>
export enum SecurityErrorSubType {
    /// <summary>
    /// None.
    /// </summary>
    None = 0,
    /// <summary>
    /// Do not have permission to add/update/delete.
    /// </summary>
    AccessDenied = 1,
    /// <summary>
    /// Do not have permission to view record.
    /// </summary>
    View = 2,
    /// <summary>
    /// Do not have permission to add record.
    /// </summary>
    Add = 3,
    /// <summary>
    /// Do not have permission to update record.
    /// </summary>
    Update = 4,
    /// <summary>
    /// Do not have permission to delete record.
    /// </summary>
    Delete = 5,
    /// <summary>
    /// Do not have permission to update field value.
    /// </summary>
    UpdateField = 6
}

/// <summary>
/// Defines enum for Validation Error Sub Type.
/// </summary>
export enum ValidationErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// Required
    /// </summary>
    FieldRequired = 1,

    /// <summary>
    /// Length Exceeded
    /// </summary>
    LengthExceeded = 2,

    /// <summary>
    /// Range
    /// </summary>
    OutOfRange = 3,

    /// <summary>
    /// Invalid Data Type
    /// </summary>
    InvalidDataType = 4,

    /// <summary>
    /// When user define filed exceed from supported field
    /// </summary>
    MaxInstanceLimit = 5,

    ///// <summary>
    ///// The refrence exists
    ///// </summary>
    //RefrenceExists = 7,

    /// <summary>
    /// The invlid token info
    /// </summary>
    InvalidTokenInfo = 6,

    /// <summary>
    /// Invalid Field Value
    /// </summary>
    InvalidFieldValue = 7,

    /// <summary>
    ///  CirculerReference
    /// </summary>
    CirculerReference = 8,

    /// <summary>
    ///  CirculerReference
    /// </summary>
    SelfReference = 9,

    InvalidDomain = 10

}

/// <summary>
/// Defines enum for Duplicate Error Sub Type.
/// </summary>
export enum DuplicateErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,
    Duplicate =1
}

/// <summary>
/// Defines enum for Concurrency Error Sub Type.
/// </summary>
export enum ConcurrencyErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}

/// <summary>
/// Defines enum for ImportData Error Sub Type.
/// </summary>
export enum ImportDataErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// File not found
    /// </summary>
    ImportFileNotFound = 1,

    /// <summary>
    /// Oledb connection error
    /// </summary>
    OLEDBConnectionError = 2,

    /// <summary>
    /// Invalid file type
    /// </summary>
    InvalidFileType = 3,

    /// <summary>
    /// Does not have import permission
    /// </summary>
    ImportPermissionDenied = 4,

    /// <summary>
    /// Invalid field value
    /// </summary>
    InvalidFieldValue = 5,

    /// <summary>
    /// Sheet not found in excel file
    /// </summary>
    SheetNotFound = 6,

    /// <summary>
    /// The field required
    /// </summary>
    FieldRequired = 7,

    /// <summary>
    /// The invited employee already exists
    /// </summary>
    InvitedEmployeeAlreadyExists = 8,

    /// <summary>
    /// The invalidExcelFile
    /// </summary>
    InvalidExcelFile = 9
}

/// <summary>
/// Defines enum for ImportData Error Sub Type.
/// </summary>
export enum NotImplementedErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}


/// <summary>
/// Defines enum for InvalidRequestArgument Error Sub Type.
/// </summary>
export enum InvalidRequestArgumentErrorSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}

/// <summary>
/// Defines enum for InvalidReference Error Sub Type.
/// </summary>
export enum InvalidFieldReferenceErrorSubType {

    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// ReferenceDeleted
    /// </summary>
    ReferenceDeleted = 1,

    /// <summary>
    /// ReferenceExists
    /// </summary>
    ReferenceExists = 2
}

/// <summary>
/// Defines enum for SyncException Error Sub Type.
/// </summary>
export enum SyncExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,

    /// <summary>
    /// The re initialize
    /// </summary>
    ReInit = 1
}

/// <summary>
/// Defines enum for Ignore Error Sub Type.
/// </summary>
export enum IgnoreExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}

/// <summary>
/// Defines enum for ResponseException Error Sub Type.
/// </summary>
export enum ResponseExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}

/// <summary>
/// Defines enum for InvalidOperation Error Sub Type.
/// </summary>
export enum InvalidOperationExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0,
    /// <summary>
    /// Method not supported
    /// </summary>
    MethodNotSupported = 1,
    /// <summary>
    /// BusinessRuleVoilation
    /// </summary>
    BusinessRuleViolation = 2,
    /// <summary>
    /// The inactive user
    /// </summary>
    InactiveUser = 3,

    /// <summary>
    /// The minimum member count reached
    /// </summary>
    MinMemberCountReached = 4,

    /// <summary>
    /// The maximum member count reached
    /// </summary>
    MaxMemberCountReached = 5

}

/// <summary>
/// Defines enum for PassThrough Error Sub Type.
/// </summary>
export enum PassThroughExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}

/// <summary>
/// Defines enum for Recoverable Error Sub Type.
/// </summary>
export enum RecoverableExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}


/// <summary>
/// Defines enum for DataService Error Sub Type.
/// </summary>
export enum DataServiceExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}


/// <summary>
/// Defines enum for DataException Error Sub Type.
/// </summary>
export enum DataExceptionSubType {
    /// <summary>
    /// None
    /// </summary>
    None = 0
}

/// <summary>
/// Defines enum for push exception error sub type.
/// </summary>
export enum PushExceptionSubType {

    /// <summary>
    /// The none
    /// </summary>
    None = 0,

    /// <summary>
    /// The registration error
    /// </summary>
    RegistrationError = 1,

}
