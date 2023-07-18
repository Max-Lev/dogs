import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, filter, from, map, mergeMap, of, tap, toArray } from 'rxjs';
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

  displayDogs$(): Observable<any> {

    // const res: Subject<Dog> = new Subject();
    const res: Dog[] = [];
    // const list = [];
    return this.getDogs$().pipe(
      mergeMap((response) => {
        return this.setModel(response);
      }),
      mergeMap((dog: Dog) => {
        return this.getDogsImages$(dog.breedName).pipe(
          // IResponse

          map((response: { message: string[], status: string }) => {
            // return of(res.push(new Dog(dog.breedName, response.message)))
            res.push(new Dog(dog.breedName, response.message))
            // return new Dog(dog.breedName, response.message)
            return res;
          }
          ),
          // toArray()
          // map((response: { message: string[], status: string }) => ({
          //   dog: dog,
          //   images: response.message
          // }))
        )


      }));
    //   console.log(from([res]))
    // return from([res]);
  }

  setModel(response: { message: string[], status: string }): Dog[] {

    const keys: string[] = Object.keys(response.message);

    const vals: Dog[] = [];

    keys.forEach((k: string) => {
      const breeds = response.message[k as any];
      if (breeds.length === 0) {
        return vals.push(new Dog(k));
      } else {
        return false;
      }
    });

    return vals;
  }

}
