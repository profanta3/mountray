import { Component, OnInit } from '@angular/core';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService) { }

  mList: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    var jdata: string[] = []; 
    this.dataHandler.getData()
    .subscribe(data => {
      this.mList = data;
      console.log(this.mList);
    });
  }

}
