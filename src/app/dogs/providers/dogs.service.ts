import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map, of, switchMap } from 'rxjs';
import { IResponse } from '../models/api-response.model';

@Injectable()
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogsAPI$(): Observable<IResponse> {
    return this.http.get<IResponse>('https://dog.ceo/api/breeds/list/all');
  }

  getDogsList$(): Observable<string[]> {
    return this.getDogsAPI$().pipe(map((response: IResponse) => this.getBreedsOptions(response)));
  }

  getBreedsOptions(response: IResponse): string[] {
    const keys: string[] = Object.keys(response.message);
    return keys;
  }

  getImagesAPI$(breed: string): Observable<{ message: string[], status: string }> {
    return this.http.get<{ message: string[], status: string }>(`https://dog.ceo/api/breed/${breed}/images`);
  }

  getDogsImages$(breed: string, size: number): Observable<string[]> {

    return this.getImagesAPI$(breed)
      .pipe(
        map((response: { message: string[], status: string }) => {
          if (size === null) {
            return response.message;
          } else {
            return response.message.slice(0, size);
          }

        })
      );
  }



}
