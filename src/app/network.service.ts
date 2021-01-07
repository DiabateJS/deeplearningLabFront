import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "./environments/environment";
import {Helper} from "./Helper";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient) { }

  getNetworks():Observable<any> {
    let url = `${environment.urlBase}operation=enum&type=networks`;
    return this.httpClient.get<any>(url);
  }

  getNetwork(id): Observable<any> {
    let url = `${environment.urlBase}operation=enum&type=network&idNetwork=${id}`;
    return this.httpClient.get<any>(url);
  }

  deleteNetwork(id): Observable<any> {
    let url = `${environment.urlBase}operation=delete&type=network&id=${id}`;
    return this.httpClient.get<any>(url);
  }

  createNetwork(request): Observable<any> {
    const httpOptions = Helper.getHttpOptions();
    let url = `${environment.urlBase}operation=create&type=network`;
    return this.httpClient.post<any>(url,request,httpOptions);
  }

  updateNetwork(request): Observable<any> {
    const httpOptions = Helper.getHttpOptions();
    let url = `${environment.urlBase}operation=update&type=network`;
    return this.httpClient.post(url,request,httpOptions);
  }
}
