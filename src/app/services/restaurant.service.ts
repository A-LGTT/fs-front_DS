import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Restaurant} from "../dto/restaurant.dto";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }


  public getRestaurants(): Observable<Restaurant[]> {
    return this.httpClient.get<Restaurant[]>(`http://localhost:8080/restaurants`);

  }

  public getRestaurantbyId(id: number): Observable<Restaurant> {
    return this.httpClient.get<Restaurant>(`http://localhost:8080/restaurants/${id}`);
  }

  public addRestaurant(nom: string, adresse: string): Observable<Restaurant> {
    return this.httpClient.post<Restaurant>(`http://localhost:8080/restaurants`, {nom: nom, adresse: adresse})
  }

}
