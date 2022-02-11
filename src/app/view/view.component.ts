import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private dataHandler: DatahandlerService , private routed: ActivatedRoute, private location: Location,
    private router: Router) {
   }


  current_id = 0;

  ngOnInit(): void {
    let ix = this.routed.snapshot.paramMap.get('id');
    if (ix != null) {
      this.current_id = Number(ix);

      this.dataHandler.getData(this.current_id)
      .subscribe(data => {
        this.mountain = data;
        console.log(this.mountain);
        if (this.mountain == null) {
          this.router.navigate(['/not_found']);
        }
      })
    };
  }

  mountain: any = {}

  getUrl() {
    let s = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), ";
    return s + "url(' "+this.mountain.imageUrl+"')";
  }

  navigateBack() 
  {
    this.location.back();
  }
}
