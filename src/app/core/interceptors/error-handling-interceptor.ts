import {

    HttpEvent,
   
    HttpInterceptor,
   
    HttpHandler,
   
    HttpRequest,
   
    HttpResponse,
   
    HttpErrorResponse
   
   } from '@angular/common/http';
   
   import { Observable, throwError } from 'rxjs';
   
   import { retry, catchError } from 'rxjs/operators';

   
   
   
   export class HttpErrorInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //   request = request.clone({
    //     withCredentials: true
    // });
    debugger;


   
    // if(AssignedId != null){
    //   let AssignedIdRemove = AssignedId.replace(/^"|"$/g, '');
    //   let headers = request.headers.set("Access-Control-Allow-Credentials", 'true')
    //   .set('assignedId', AssignedIdRemove);
    //   request = request.clone({ headers });
    // }

    let headers = request.headers.set("Access-Control-Allow-Credentials", 'true')
    // .set('Access-Control-Allow-Credentials','Access-Control-Allow-Credentials')
    // .set('Access-Control-Allow-Credentials','true');
    request = request.clone({ headers });
      return next.handle(request)
   
        .pipe(
   
          retry(1),
   
          catchError((error: HttpErrorResponse) => {
   
            let errorMessage = '';
   
            if (error.error instanceof ErrorEvent) {
   
              // client-side error
   
              errorMessage = `Error: ${error.error.error.MessageList}`;
   
            } else {
   
              // server-side error
   
              errorMessage = `We Are Unable To Process Your Request Please Try Again Later \nView Error Details Below: \nError Code: ${error.status}\nMessage: ${error.error.MessageList}`;
   
            }
   
            window.alert(errorMessage);
   
            return throwError(errorMessage);
   
          })
   
        )
   
    }
   
   }