import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Helper} from "./Helper";
import {environment} from "./environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LearningBaseService {

  constructor(private httpClient: HttpClient) { }

  getNetworkLearningBaseItems(id): Observable<any>{
    let url = `${environment.urlBase}operation=enum&type=learning_base_items&idNetwork=${id}`;
    return this.httpClient.get(url);
  }

  getNetworkLearningBaseItem(idNetwork, idItem): Observable<any>{
    let url = `${environment.urlBase}operation=enum&type=learning_base_item&idNetwork=${idNetwork}&id=${idItem}`;
    return this.httpClient.get(url);
  }

  createNetworkLearningBaseItem(newItem): Observable<any>{
    let url = `${environment.urlBase}operation=create&type=learning_base`;
    const httpOptions = Helper.getHttpOptions();
    return this.httpClient.post(url,newItem, httpOptions);
  }

  updateNetworkLearningBaseItem(newItem): Observable<any>{
    let url = `${environment.urlBase}operation=update&type=learning_base`;
    const httpOptions = Helper.getHttpOptions();
    return this.httpClient.post(url,newItem, httpOptions);
  }

  deleteNetworkLearningBaseItem(id): Observable<any>{
    let url = `${environment.urlBase}operation=delete&type=learning_base&id=${id}`;
    return this.httpClient.get(url);
  }
}

