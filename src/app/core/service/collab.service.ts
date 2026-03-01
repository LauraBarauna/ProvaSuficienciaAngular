import { HttpClient, HttpParams } from "@angular/common/http";
import { Collab } from "../model/collab.modal";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CollabService {
  private readonly API_URL = "https://69a37967611ecf5bfc22e438.mockapi.io/lauravbarauna/provasuficiencia/employees";

  constructor(
    private http: HttpClient
  ) { }

  public createCollab(body: Collab) {
    return this.http.post<Collab>(this.API_URL, body);
  }

  public getAllCollabs() {
    return this.http.get<Collab[]>(`${this.API_URL}`);
  }

  public deleteCollab(id: string | undefined) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
