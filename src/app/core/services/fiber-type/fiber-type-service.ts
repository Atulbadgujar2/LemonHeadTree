import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiberTypeModel } from 'app/core/model/fiber-type/fiber-type-model';
import { FiberTypeRequestModel } from 'app/core/model/fiber-type/fiber-type-request.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../base.services';
import { HttpErrorHandlerService } from '../http-error-handler.service';



@Injectable({
  providedIn: 'root'
})
export class FiberTypeService  extends BaseService {
  handleError: any;
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
      super(http);
      this.handleError = httpErrorHandler.createHandleError('FiberTypeService');
  }


  //to get User role list
  public getFiberTypeList(): Observable<any> {
      const url: string = environment.ServiceUrl + 'statparam';
      return this.get<any>(url, null, 'getFiberTypeList');
  }

    //To add Fiber Type details
  public addFiberType(fiberType: FiberTypeRequestModel): Observable<string> {
      let url: string = environment.ServiceUrl + 'statparam'
      return this.post<FiberTypeRequestModel>(url, fiberType, null, "addFiberType");
  }

  //get User role  detail by User role id 
//   public getUserRoleDetails(id: string): Observable<RoleModel> {
//       const url: string = environment.ServiceUrl + 'Role/role?id='+ id;
//       return this.get<RoleModel>(url, null, 'getUserRoleDetails');
//   }
  // Update User role Details
//   public updateUserRoleDetails(rolemodal: RoleModel): Observable<string> {
//       let url: string = environment.ServiceUrl + 'Role/update'
//       return this.post(url, rolemodal, null, "updateUserRoleDetails");
//   }

  // Delete user role.
//   public deleteUserRole(id: string): Observable<number> {
//       let url: string = environment.ServiceUrl + 'Role/delete/ ' + id
//       return this.put<number>(url, id, null, "deleted User Role");
//   }
}