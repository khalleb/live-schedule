import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';
import { Live } from '../model/live.model';

@Injectable({ providedIn: 'root' })
export class LiveService {
  // url = 'http://localhost:3333/lives';
  url = 'https://pokeapi.co/api/v2/pokemo';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpCliente: HttpClient) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    // return this.httpCliente.get<ResponsePageable>(this.url + '?flag=' + flag);
    return this.httpCliente.get<ResponsePageable>(this.url);
  }

  public postLives(live: any): Observable<Live> {
    return this.httpCliente.post<any>(this.url, live, this.httpOptions);
  }

}
