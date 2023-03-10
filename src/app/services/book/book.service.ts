import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseSearchUrl: string = 'https://hapi-books.p.rapidapi.com/search/';

  constructor(private http: HttpClient) { }

  getBookByName(name: string): Observable<Book[]> {
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': '5a7c5c448amsha99e1fe383c54fcp12a120jsna5992a57e77f',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    });

    return this.http.get<any>(this.baseSearchUrl + name, { headers });
  }

}
