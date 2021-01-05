import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  baseItem;
  learningRate;
  ecartMoy;

  ngOnInit() {
    let url = `${environment.urlBase}operation=enum&type=learning_config`;
    this.httpClient.get<any>(url).subscribe((data:any) => {
      this.baseItem = data.baseItem;
      this.learningRate = data.learningRate;
      this.ecartMoy = data.ecartMoy;
    });
  }

}
