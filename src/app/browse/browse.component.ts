import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataHandler.getData()
    .subscribe(data => {
      console.log(data);
    })
  }

}
