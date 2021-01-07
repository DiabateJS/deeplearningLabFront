import { Component, OnInit } from '@angular/core';
import {NetworkService} from "../network.service";
import {LearningBaseService} from "../learning-base.service";

@Component({
  selector: 'app-learning-base',
  templateUrl: './learning-base.component.html',
  styleUrls: ['./learning-base.component.css']
})
export class LearningBaseComponent implements OnInit {
  networks;
  network;
  nbreNeuronesEntree = 0;
  nbreNeuronesSortie = 0;

  items;
  item;

  private loadNetworks(): void {
    this.networkService.getNetworks().subscribe((data: any) => {
      this.networks = data;
    });
  }

  private loadLearningBaseItems(): void {
    this.learningBaseService.getNetworkLearningBaseItems(this.network.id).subscribe(data => {
      this.items = data;
    });
  }

  constructor(private networkService: NetworkService,
              private learningBaseService: LearningBaseService) { }

  ngOnInit(): void {
    this.loadNetworks();
    this.network = {};

    this.items = [];
    this.item = {};
  }

  changeNetwork(){
    this.networkService.getNetwork(this.network.id).subscribe(data => {
        this.network = data;
        if (data.neuronsParCouches){
          let tab = data.neuronsParCouches.split(',');
          if (tab){
            this.nbreNeuronesEntree = tab[0];
            this.nbreNeuronesSortie = tab[tab.length - 1];
          }
        }
    });
    this.learningBaseService.getNetworkLearningBaseItems(this.network.id).subscribe(data => {
      this.items = data;
    })
  }

  private createItemRequest(){
    return {
      idNetwork: this.network.id,
      id: this.item.id,
      input: this.item.input,
      output: this.item.output
    }
  }

  saveItem() {
    let request = this.createItemRequest();
    if (this.item.id){
      //Mise à jour de l'item
      this.learningBaseService.updateNetworkLearningBaseItem(request).subscribe(data => {
        console.log(data);
        this.loadLearningBaseItems();
      })
    }else{
      //Creation de l'item
      this.learningBaseService.createNetworkLearningBaseItem(request).subscribe(data => {
        console.log(data);
        this.loadLearningBaseItems();
        this.clearItemForm();
      });
    }
  }

  clearItemForm(){
    this.item = {};
  }

  showItem(idNetwork, idItem){
    this.learningBaseService.getNetworkLearningBaseItem(idNetwork, idItem).subscribe(data => {
      this.item = data;
    });
  }

  deleteItem(idItem){
    this.learningBaseService.deleteNetworkLearningBaseItem(idItem).subscribe(data => {
      this.clearItemForm();
      this.loadLearningBaseItems();
    });
  }

}
