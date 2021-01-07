import { Component, OnInit } from '@angular/core';
import {environment} from "../environments/environment";
import {LearningConfigService} from "../learning-config.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private learningConfigService: LearningConfigService) { }
  baseItem;
  learningRate;
  ecartMoy;

  ngOnInit() {
    let url = `${environment.urlBase}operation=enum&type=learning_config`;
    this.learningConfigService.getLearningConfig().subscribe((data:any) => {
      this.baseItem = data.baseItem;
      this.learningRate = data.learningRate;
      this.ecartMoy = data.ecartMoy;
    });
  }

}
