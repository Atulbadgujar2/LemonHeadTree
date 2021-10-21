import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierRequestModel } from 'app/core/model/supplier/supplier.request.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../base.services';
import { HttpErrorHandlerService } from '../http-error-handler.service';



@Injectable({
  providedIn: 'root'
})
export class SupplierService extends BaseService {
  handleError: any;
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
      super(http);
      this.handleError = httpErrorHandler.createHandleError('SupplierService');
  }


  //to get Supplier list
  public getSupplierList(): Observable<any> {
      const url: string = environment.ServiceUrl + 'supplier';
      return this.get<any>(url, null, 'getSupplierList');
  }

   //To add Supplier details
   public addSupplier(supplier: SupplierRequestModel): Observable<string> {
    let url: string = environment.ServiceUrl + 'supplier'
    return this.post<SupplierRequestModel>(url, supplier, null, "addSupplier");
}

//  Delete Supplier.
public deleteSupplierById(Supplier: SupplierRequestModel): Observable<string> {
  let url: string = environment.ServiceUrl + 'supplier' 
  return this.delete(url, Supplier, "deleteSupplier");
}

// Update Suppliers Details 
public updateSupplierDetails(Supplier: SupplierRequestModel): Observable<string> {
  let url: string = environment.ServiceUrl + 'supplier'
  return this.patch(url, Supplier, null, "updateSupplierDetails");
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
