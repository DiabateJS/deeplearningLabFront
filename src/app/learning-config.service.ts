import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "./environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LearningConfigService {

  constructor(private httpClient: HttpClient) { }

  getLearningConfig(): Observable<any>{
    let url = `${environment.urlBase}operation=enum&type=learning_config`;
    return this.httpClient.get<any>(url);
  }
}
