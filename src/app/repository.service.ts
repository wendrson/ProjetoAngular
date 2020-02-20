import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor( private http: HttpClient ) { }

  public getData = (route: string) => {
    return this.http.get(this.createCompleteRoute (route, environment.urlAddress));
  }

  public create = (route: string, body) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public update = (route: string, body) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  public delet = (route: string) => {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return '${envAddress}/${route}';
  }

  private genereteHeaders = () => {
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }


}
