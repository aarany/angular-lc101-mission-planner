import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "LC Angular Studio 3";
  rocketName: string = "DOINGMYBEST";
  editingRocket: boolean = false;
  editingMission: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }
}
