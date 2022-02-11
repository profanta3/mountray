import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandlerService } from 'src/app/datahandler.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService, private _router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Get Data from Datahandler Service...
   */
  getData() {
    var jdata: string[] = []; 
    this.dataHandler.getDataLocal()
    .subscribe(data => {
      this.mList = data;
      console.log(this.mList);
    });
  }

  /**
   * List of Mountains fetched from backend
   */
  mList: any;
  
  /**
   * Remove specific Mountain by API call
   * @param ix id of mountain-entry to remove
   */
  remove(ix: number) {
    if (window.confirm("Delete Data?")) {
      this.dataHandler.removeData(ix)
      .subscribe(data  => {
        this.mList = data;
        console.log(this.mList);
      });
    }
  }

  /**
   * Edit a mountain by navigating to edit page and appending the id to the URL
   * @param ix mountain to edit via API call
   */
  edit(ix: number) {
    this._router.navigate(['/admin/api/edit/', { id: ix}]);
  }

  view(ix:number) {
    this._router.navigate(['/view', { id: ix}]);
  }
}
