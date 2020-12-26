import { Component, OnInit } from '@angular/core';
import { faSearch, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Consultant } from '../model/consultant';
import { ConsultantsService } from '../services/consultants/consultants.service';

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
  constructor(private consultantsService: ConsultantsService) { }

  ngOnInit(): void {
  }

  public get consultants$(): Observable<Consultant[]> {
    return this.consultantsService.consultants$;
  }

}
