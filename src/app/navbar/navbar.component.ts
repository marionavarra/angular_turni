import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed=true;
  faUser = faUser;
  faUserCircle = faUserCircle;
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
