import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() isSearchPage: boolean = false;
  defaultText: string = "Search for resources";
  categorySearch: string = this.defaultText;
  postalCode: number;
  keyword: string = "";
  locationInput: string;
  selectedAddr: string;
  constructor() {
  }

  ngOnInit(): void {

  }

  setCategory(category: string) {
    this.categorySearch = category;
    this.focusNextInput();
  }

  focusNextInput() {
    document.getElementById("location").focus();
  }

  getLong(components: any, name: string) {
    const component = this.getComponent(components, name);
    return component && component.long_name;
  }

  getComponent(components: any, name: string) {
    return components.filter(component => component.types[0] === name)[0];
  }

}
