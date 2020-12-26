import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consultant } from 'src/app/model/consultant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultantsService {
  private readonly url: string = '/api/consultants';

  constructor(private http: HttpClient) { }

  public get consultants$(): Observable<Consultant[]> {
    const fullUrl: string = environment.baseBackendUrl + this.url;
    return this.http.get<Consultant[]>(fullUrl);
  }
}
