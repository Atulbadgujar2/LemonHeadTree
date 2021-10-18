import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { RoleModel } from '../model/role/role-model';
import { BaseService } from './base.services';
import { HttpErrorHandlerService } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService  extends BaseService {
  handleError: any;
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
      super(http);
      this.handleError = httpErrorHandler.createHandleError('UserRoleService');
  }


  //to get User role list
  public getUserRoleList(): Observable<any> {
      const url: string = environment.ServiceUrl;
      return this.get<any>(url, null, 'getUserRoleList');
  }

  //get User role  detail by User role id 
  public getUserRoleDetails(id: string): Observable<RoleModel> {
      const url: string = environment.ServiceUrl + 'Role/role?id='+ id;
      return this.get<RoleModel>(url, null, 'getUserRoleDetails');
  }
  // Update User role Details
  public updateUserRoleDetails(rolemodal: RoleModel): Observable<string> {
      let url: string = environment.ServiceUrl + 'Role/update'
      return this.post(url, rolemodal, null, "updateUserRoleDetails");
  }
  // To add User role details
  public addUserRole(rolemodal: RoleModel): Observable<string> {
      let url: string = environment.ServiceUrl + 'Role/add'
      return this.post<RoleModel>(url, rolemodal, null, "addUserRole");
  }
  // Delete user role.
  public deleteUserRole(id: string): Observable<number> {
      let url: string = environment.ServiceUrl + 'Role/delete/ ' + id
      return this.put<number>(url, id, null, "deleted User Role");
  }
}