import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FiberCompositionRequestModel } from 'app/core/model/fiber-composition/fiber-composition-request-model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../base.services';
import { HttpErrorHandlerService } from '../http-error-handler.service';



@Injectable({
  providedIn: 'root'
})
export class FiberCompositionService  extends BaseService {
  handleError: any;
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
      super(http);
      this.handleError = httpErrorHandler.createHandleError('FabricCompositionService');
  }


  //to get Fiber Compositio list
  public getFiberCompositionList(): Observable<any> {
      const url: string = environment.ServiceUrl + 'fibercomposition';
      return this.get<any>(url, null, 'getFiberCompositionList');
  } 


  //To add Fiber Compositio details
public addFiberComposition(fiberComposition: FiberCompositionRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'fibercomposition'
    return this.post<FiberCompositionRequestModel>(url, fiberComposition, null, "addFiberComposition");
}

//  Delete Fiber Compositio.
public deleteFiberComposition(fiberComposition: FiberCompositionRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'fibercomposition' 
    return this.delete(url, fiberComposition, "deleteFiberComposition");
}

  // Update Fiber Compositio Details 
public updateFiberCompositionDetails(fiberComposition: FiberCompositionRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'fibercomposition'
    return this.patch(url, fiberComposition, null, "updateFiberCompositionDetails");
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
  // To add User role details
//   public addUserRole(rolemodal: RoleModel): Observable<string> {
//       let url: string = environment.ServiceUrl + 'Role/add'
//       return this.post<RoleModel>(url, rolemodal, null, "addUserRole");
//   }
  // Delete user role.
//   public deleteUserRole(id: string): Observable<number> {
//       let url: string = environment.ServiceUrl + 'Role/delete/ ' + id
//       return this.put<number>(url, id, null, "deleted User Role");
//   }
}