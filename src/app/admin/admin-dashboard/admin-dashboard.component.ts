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

  getData() {
    var jdata: string[] = []; 
    this.dataHandler.getDataLocal()
    .subscribe(data => {
      this.mList = data;
      console.log(this.mList);
    });
  }

  mList: any;
  
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
