import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";

import { FavouriteCommon } from "../../model/favourite/favourite.model";
import { BaseService } from "../base.services";
import { HttpErrorHandlerService } from "../http-error-handler.service";

@Injectable({ providedIn: 'root' })
export class FavouriteService extends BaseService {
    handleError: any;

    constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
        super(http);
        this.handleError = httpErrorHandler.createHandleError('ClientBaseEmailStatusMaintenanceService');
    }

    //get for favourite
    public getfavourite(id: string): Observable<Array<FavouriteCommon>> {
        const url: string = environment.ServiceUrl + 'Favourite/home/favourite/' + id;
        return this.get<Array<FavouriteCommon>>(url, null, 'getfavourite');
    }

    // select as favourite
    public selectFavourite(favouriteCommon: FavouriteCommon): Observable<string> {
        let url: string = environment.ServiceUrl + 'Favourite/manage'
        return this.post<FavouriteCommon>(url, favouriteCommon, null, "selectFavourite");
    }
}
