import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { BaseService } from './base.services';
import { HandleError, HttpErrorHandlerService } from "./http-error-handler.service";
import { LoginModel } from '../model/user/login-model';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ResponseModel } from '../model/response/response-model';
import { RegisterModel } from '../model/user/register-model';
import { UserModel } from '../model/user/user-model';
import { ResetPasswordModel } from '../model/user/reset-password-model';
import { DataResult, orderBy, process, SortDescriptor} from "@progress/kendo-data-query";
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
  protected handleError: HandleError;
  constructor(http: HttpClient, httpErrorHandler: HttpErrorHandlerService) {
    super(http);
    this.handleError = httpErrorHandler.createHandleError('ReportService');

   }

  // To Login 
  public Login(loginModel: LoginModel): Observable<Response> {
    let url: string = environment.ServiceUrl + 'Authenticate/login'
    return this.post<LoginModel>(url, loginModel, null, "Login");
  }

public GetUserById(Id?:string): Observable<UserModel> {
  const url: string = environment.ServiceUrl + 'Authenticate/GetUserById?id='+Id;;
  return this.get<UserModel>(url, null, 'GetUserById');
}
  // To Login 
  public AddUser(registermodel: RegisterModel): Observable<Response> {
    let url: string = environment.ServiceUrl + 'Authenticate/Register'
    return this.post<RegisterModel>(url, registermodel, null, "AddUser");
  }

  //Get Task code list for Employee List
  //get job class code list
  public GetAllUser(): Observable<Array<UserModel>> {
    const url: string = environment.ServiceUrl + 'Authenticate/AllUser';
    return this.get<Array<UserModel>>(url, null, 'AllUser');
  }

  public deleteUser(id: string): Observable<Response> {
    let url: string = environment.ServiceUrl + 'Authenticate/DeleteUser?id='+id;
    return this.post(url, "", null, "deleted platfrom user");
  }
  public SendResetPasswordLink(username:string):Observable<Response> {
    let url: string = environment.ServiceUrl + 'Authenticate/SendPasswordResetLink?username='+username;
    return this.post(url, "", null, "Send Reset Password Link");
  }

public ResetPasswordUser(resetpasswordmodel: ResetPasswordModel): Observable<Response> {
  let url: string = environment.ServiceUrl + 'Authenticate/ResetPassword'
  return this.post<ResetPasswordModel>(url, resetpasswordmodel, null, "Reset Password ");
}
public UpdateUser(UserModel:UserModel):Observable<Response>{
  let url:string=environment.ServiceUrl+'Authenticate/UpdateUser'
  return this.post<UserModel>(url,UserModel,null,"Update User");
}

}
