import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected baseHttp: HttpClient;

  protected baseURL = 'http://localhost:8081/v1';
  protected baseStaticURL = 'https://api.url';

  constructor(injector: Injector) {
   // this.baseHttp = injector.get(HttpClient);
  }

  getBaseStaticUrl() {
    return this.baseStaticURL;
  }

}
