//===============================================================================
// © 2021 ThinkAI Apps.  All rights reserved.
// Original Author: Atul Badgujar
// Original Date: 26 Feb 2021
//==============================================================================


 export  enum ErrorType {
    /// <summary>
    /// Success
    /// </summary>
    Success = 0,
    /// <summary>
    /// System Error
    /// </summary>
    System = 1,
    /// <summary>
    /// Invalid Database Version
    /// </summary>
    InvalidVersion = 2,
    /// <summary>
    /// User Status
    /// </summary>
    Database = 3,
    /// <summary>
    /// Authentication Error.
    /// </summary>
    Authentication = 4,
    ///// <summary>
    ///// This type is used relogin user
    ///// due to invalid token, inactive user or delete user on server.
    ///// </summary>
    //ReLogin = 5,
    /// <summary>
    /// Security Error
    /// </summary>
    Security = 5,
    /// <summary>
    /// Validation Error
    /// </summary>
    Validation = 6,
    /// <summary>
    /// Duplicate.
    /// </summary>
    Duplicate = 7,
    /// <summary>
    /// Concurrency Error
    /// </summary>
    Concurrency = 8,
    /// <summary>
    /// Import Data Error.
    /// </summary>
    ImportData = 9,
    /// <summary>
    /// Invalid Device Id
    /// </summary>
    InvalidDeviceId = 10,
    ///// <summary>
    ///// Invalid Application Version
    ///// </summary>
    //InvalidAppSuiteVersion = 8,
    /// <summary>
    /// Not Implemented
    /// </summary>
    //NotImplemented = 11,
    /// <summary>
    /// Request arguement is invalid.
    /// </summary>
    NullRequestArgument = 11,

    /// <summary>
    /// Invalid timezone.
    /// </summary>
    InvalidTimeZone = 12,

    /// <summary>
    /// Invalid Reference.
    /// </summary>
    InvalidFieldReference = 13,

    /// <summary>
    /// The synchronize exception
    /// </summary>
    SyncException = 14,

    /// <summary>
    /// The ignore exception
    /// </summary>
    IgnoreException = 15,

    /// <summary>
    /// The response exception
    /// </summary>
    ResponseException = 16,


    /// <summary>
    /// The invalid operation
    /// </summary>
    InvalidOperation = 17,


    /// <summary>
    /// The pass through exception
    /// </summary>
    PassThroughException = 18,


    /// <summary>
    /// The recoverable exception
    /// </summary>
    RecoverableException = 19,

    /// <summary>
    /// The data service exception
    /// </summary>
    DataServiceException = 20,

    /// <summary>
    /// The data exception
    /// </summary>
    DataException = 21,

    /// <summary>
    /// The push exception
    /// </summary>
    PushException = 22,

    
    /// <summary>
    /// The downtime exception
    /// </summary>
    DowntimeException = 24,

    /// <summary>
    /// The Openfire exception
    /// </summary>
    OpenFireServerException = 25

  }
