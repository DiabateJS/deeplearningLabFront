import {HttpHeaders} from "@angular/common/http";

export class Helper {
  public static getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }
}
