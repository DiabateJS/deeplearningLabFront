import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../network.service";

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  networks;
  network;
  constructor(private networkService: NetworkService) {
    this.networks = [];
    this.network = {};
  }

  private loadNetworks(): void {
    this.networkService.getNetworks().subscribe((data: any) => {
      this.networks = data;
    });
  }

  ngOnInit(): void {
    this.loadNetworks();
  }

  showNetwork(id): void {
    this.networkService.getNetwork(id).subscribe((data: any) => {
      this.network = data;
    });
  }

  deleteNetwork(id): void {
    this.networkService.deleteNetwork(id).subscribe((data: any) => {
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
    let request = this.createNetworkRequest();
    if (!this.network.id){
      //Creation d'un nouveau reseau
      this.networkService.createNetwork(request).subscribe((data: any) => {
        console.log(data);
        this.loadNetworks();
      });
    }else{
      //Mise à jour d'un reseau existant
      this.networkService.updateNetwork(request).subscribe((data: any) => {
        this.loadNetworks();
      });
    }
  }

  clearNetworkForm(): void {
    this.network = {}
  }



}
