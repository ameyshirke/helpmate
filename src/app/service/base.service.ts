import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected baseHttp: HttpClient;

  constructor(injector: Injector) {
     this.baseHttp = injector.get(HttpClient);
  }


}
