import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FabricRequestModel } from 'app/core/model/fabric/fabric.request.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../base.services';
import { HttpErrorHandlerService } from '../http-error-handler.service';



@Injectable({
  providedIn: 'root'
})
export class FabricService  extends BaseService {
  handleError: any;
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
      super(http);
      this.handleError = httpErrorHandler.createHandleError('FabricService');
  }


  //to get User role list
  public getFabricList(): Observable<any> {
      const url: string = environment.ServiceUrl + 'fabric';
      return this.get<any>(url, null, 'getFabricList');
  }

  //To add Fiber Type details
public addFabric(Fabric: FabricRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'fabric'
    return this.post<FabricRequestModel>(url, Fabric, null, "addFabric");
}

//  Delete Fiber Type.
public deleteFabricById(Fabric: FabricRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'fabric' 
    return this.delete(url, Fabric, "deleteFabric");
}

  // Update Fiber Types Details 
public updateFabricDetails(Fabric: FabricRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'fabric'
    return this.patch(url, Fabric, null, "updateFabricDetails");
}
}