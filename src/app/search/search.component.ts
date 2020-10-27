import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit  {

  searchQuery: string;
  results: any = []

  constructor(private route: Router) { }

  ngOnInit(): void {}

  getSearchResults() {
    this.route.navigate(['listings', this.searchQuery]);
  }

}
