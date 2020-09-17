import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ErrorResponseService {

    public handleError(response: any): Observable<never> {
        return throwError(response.error.message || response.error);
    }

}
