import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConfig} from "../shared/AppConfig";

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
    let url = `${AppConfig.urlBaseBack}operation=enum&type=networks`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      this.networks = data;
    });
  }

  ngOnInit(): void {
    this.loadNetworks();
  }

  showNetwork(id): void {
    let url = `${AppConfig.urlBaseBack}operation=enum&type=network&idNetwork=${id}`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      this.network = data;
    });
  }

  deleteNetwork(id): void {
    let url = `${AppConfig.urlBaseBack}operation=delete&type=network&id=2`;
    this.httpClient.get<any>(url).subscribe((data: any) => {
      console.log(data);
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
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    if (!this.network.id){
      //Creation d'un nouveau reseau
      url = `${AppConfig.urlBaseBack}operation=create&type=network`;
      this.httpClient.post<any>(url,request,httpOptions).subscribe((data: any) => {
        console.log(data);
        this.loadNetworks();
      });
    }else{
      //Mise à jour d'un reseau existant
      url = `${AppConfig.urlBaseBack}operation=update&type=network`;
      this.httpClient.post<any>(url,request,httpOptions).subscribe((data: any) => {
        console.log(data);
        this.loadNetworks();
      });
    }
  }

  clearNetworkForm(): void {
    this.network = {}
  }



}
