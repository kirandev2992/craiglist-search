import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SearchService } from './../search.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {

  listings: any;
  searchQuery: string

  sub: Subscription;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.searchQuery = params['searchQuery'];
      this.searchService.getSearchResults(this.searchQuery).subscribe(data => {
          this.listings = data;
      });
   });
  }

}
