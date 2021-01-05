import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  networks;
  network;
  constructor(private httpClient: HttpClient) {
    this.networks = [];
    this.network = {};
  }

  private loadNetworks(): void {
    let url = `${environment.urlBase}operation=enum&type=networks`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      this.networks = data;
    });
  }

  ngOnInit(): void {
    this.loadNetworks();
  }

  showNetwork(id): void {
    let url = `${environment.urlBase}operation=enum&type=network&idNetwork=${id}`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      this.network = data;
    });
  }

  deleteNetwork(id): void {
    let url = `${environment.urlBase}operation=delete&type=network&id=${id}`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      console.log(data);
      this.clearNetworkForm();
      this.loadNetworks();
    });
  }

  private createNetworkRequest() {
    return {
      idNetwork: this.network.id,
      label: this.network.label,
      neuronsParCouches: this.network.neuronsParCouches,
      tauxApprentissage: this.network.tauxApprentissage,
      fonctionTransfert: this.network.fonctionTransfert,
      typeReseau: this.network.typeReseau
    }
  }

  saveNetwork(): void {
    let url = '';
    let request = this.createNetworkRequest();
    console.log(request);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    if (!this.network.id){
      //Creation d'un nouveau reseau
      url = `${environment.urlBase}operation=create&type=network`;
      console.log(url);
      this.httpClient.post<any>(url,request,httpOptions).subscribe((data: any) => {
        console.log(data);
        this.loadNetworks();
      });
    }else{
      console.log("Mise a jour reseau existant");
      console.log(request);
      //Mise à jour d'un reseau existant
      url = `${environment.urlBase}operation=update&type=network`;
      console.log(url);
      this.httpClient.post(url,request,httpOptions).subscribe((data: any) => {
        this.loadNetworks();
      });
    }
  }

  clearNetworkForm(): void {
    this.network = {}
  }



}
