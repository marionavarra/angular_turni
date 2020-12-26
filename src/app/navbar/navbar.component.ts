import { Component, OnInit } from '@angular/core';
import { faSearch, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed=true;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }
}
