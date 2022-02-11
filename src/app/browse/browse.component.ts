import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService, private router: Router) { }


  mList: any;

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Get Data from data Handler Service
   */
  getData() {
    var jdata: string[] = []; 
    this.dataHandler.getDataLocal()
    .subscribe(data => {
      this.mList = data;
      console.log(this.mList);
    });
  }

  view(ix:number) {
    this.router.navigate(['/view', { id: ix}]);
  }
}
