import { IEmployee } from "./employee";
import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {}

    getEmployee(): Observable<any> {
        return this._http.get("http://localhost:63409/api/Employee")
            .map((response: Response) => {
                console.log(response)
                return response.json()
            })
            .catch(this.handleError);
    }

    handleError(error : Response) {
        console.log(error);
        return Observable.throw(error);
    }
}