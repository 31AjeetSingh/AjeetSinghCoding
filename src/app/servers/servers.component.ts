import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  showResult = false;
  clickArray = [];
  itemCounter = 0;
  // serverCreationStatus = 'No server was created';
  serverName = '';
  userName = '';
  serverCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverCreated = true;
    // this.serverCreationStatus = `Server was created and the name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event) {

    this.serverName = (<HTMLInputElement>event.target).value;

  }

  handleUser() {
    this.userName = '';

  }

  handleDisplay() {
    this.itemCounter = this.itemCounter + 1;
    if (this.showResult === false) {
      this.showResult = true;

    } else {
      this.showResult = false;
    }
    // this.clickArray.push(this.itemCounter);
    this.clickArray.push(new Date());
    console.log(this.clickArray);
  }





}
