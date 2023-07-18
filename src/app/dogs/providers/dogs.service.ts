import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, filter, from, map, mergeMap, of, take, tap, toArray } from 'rxjs';
import { IResponse } from '../models/api-response.model';
import { Dog, DogModel, IDog } from '../models/dog.model';

@Injectable()
export class DogsService {

  constructor(private http: HttpClient) { }

  getDogs$(): Observable<{ message: string[], status: string }> {
    return this.http.get<{ message: string[], status: string }>('https://dog.ceo/api/breeds/list/all');
  }

  getDogsImages$(breed: string): Observable<{ message: string[], status: string }> {
    return this.http.get<any>(`https://dog.ceo/api/breed/${breed}/images`);
  }

  getBreed$(breed: string, size: number): Observable<any> {
    return this.getDogsImages$(breed)
      .pipe(
        map((response: { message: string[], status: string }, index: number) => {
          if (size === null) {
            return response.message;
          } else {
            const r = response.message.slice(0, size)
            console.log(r, index)
            console.log(response.message, index)
            return r;
          }

        })
      )
      .pipe(
        tap((data) => {
          console.log(data);
        })
      )
  }

  getDogsList$(): Observable<string[]> {
    const res: any[] = [];
    return this.getDogs$().pipe(
      map((response) => this.getBreeds(response)),
      // mergeMap((dog: Dog) => {
      //   return this.getDogsImages$(dog.breedName).pipe(
      //     // IResponse

      //     map((response: { message: string[], status: string }) => {
      //       // return of(res.push(new Dog(dog.breedName, response.message)))
      //       res.push(new Dog(dog.breedName, response.message))
      //       // return new Dog(dog.breedName, response.message)
      //       return res;
      //     }
      //     ))


      // })
    );

  }

  getBreeds(response: { message: string[], status: string }): string[] {

    const keys: string[] = Object.keys(response.message);
    return keys;

  }

}
