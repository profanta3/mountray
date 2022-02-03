import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService, private _router: Router) { }

  mList: any;

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    var jdata: string[] = []; 
    this.dataHandler.getDataLocal()
    .subscribe(data => {
      this.mList = data;
      console.log(this.mList);
    });
  }

  remove(ix: number) {
    if (window.confirm("Delete Data?")) {
      this.dataHandler.removeData(ix)
      .subscribe(data  => {
        this.mList = data;
        console.log(this.mList);
      });
    }
  }

  edit(ix: number) {
    this._router.navigate(['/admin/api/edit/', { id: ix}]);
  }
}
