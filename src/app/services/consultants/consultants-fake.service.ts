import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Consultant } from 'src/app/model/consultant';

const fakeResult: Consultant[] = [
  {
    id: "0",
    name: "Mario Rossi"
  },
  {
    id: "1",
    name: "Giuseppe Verdi"
  },
  {
    id: "2",
    name: "Michele Bianchi"
  },
];

@Injectable({
  providedIn: 'root'
})
export class ConsultantsFakeService {
  constructor() { }

  public get consultants$(): Observable<Consultant[]> {
    return of(fakeResult);
  }
}