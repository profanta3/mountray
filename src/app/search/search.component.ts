import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatahandlerService } from '../datahandler.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnChanges {

  constructor(private dataHandler: DatahandlerService, 
    private formBuilder: FormBuilder, 
    private routed: ActivatedRoute,
    private router: Router) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function() {
        return false;
    };
  }

  ngOnChanges(changes: SimpleChanges): void { }

  /**
   * get data from backend. Fetches URL parameter 's' to init search with Value of 's'
   */
  ngOnInit(): void {
    this.getData()
    .subscribe(d => {
      this.raw_data = d;
      let x = this.raw_data.length;
      
      console.log("got List: ", this.raw_data);;

      let ix = this.routed.snapshot.paramMap.get('s');
      for (let item of this.raw_data) {
        this.mList.push(item);
        console.log("pushed: ", item);
      }
      this.fList = this.mList;

      if (ix != null) {
        this.searchTerm = ix;
        this.listEntries();
      }
    })
  }

  @Input()
  searchTerm = '';

  /**
   * Search through dataset
   */
  search() {
    this.listEntries();
  }

  //Raw JSON data from API call
  raw_data: any;

  //JSON data from API call
  mList: Object[] = []

  //filtered JSON data for displaying in search results.
  fList: any[] = []

  searchForm = this.formBuilder.group({
    search: ''
  })

  /**
   * the filter function updates the fList to contain only the filtered results
   */
  listEntries() {    
    this.fList = this.mList.filter( (data) => {
      for (const [key, value] of Object.entries(data)) {
        if (`${value}`.toLowerCase().includes(this.searchTerm.toLowerCase()) && `${key}` != "imageUrl") {
          return true;
        }
      }
      return false;
    })
    console.log(this.fList);
  }

  /**
   * Get Data from backend
   * @returns data promise
   */
  getData() {
    return this.dataHandler.getDataLocal();
  }

  view(ix:number) {
    this.router.navigate(['/view', { id: ix}]);
  }
}

