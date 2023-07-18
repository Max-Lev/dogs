import { Component, OnInit } from '@angular/core';
import { DogsService } from '../providers/dogs.service';
import { HttpClient } from '@angular/common/http';
import { IResponse } from '../models/api-response.model';
import { Dog, DogModel } from '../models/dog.model';
import { Observable, map, of } from 'rxjs';

@Component({
  selector: 'app-dogs-container',
  templateUrl: './dogs-container.component.html',
  styleUrls: ['./dogs-container.component.scss']
})
export class DogsContainerComponent implements OnInit {

  dogs = [
    {
      name: 'German',
      value: 1
    }
  ];

  amount = Array.from({ length: 50 }, (_, i) => i + 1)

  dogs$!: Observable<Dog[]>;

  constructor(private dogsService: DogsService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.dogs$ = this.dogsService.displayDogs$();
    console.log(this.dogs$)
    // .pipe(
    //   map((r) => r.dog)
    // );
    this.dogsService.displayDogs$().subscribe((response: { dog: Dog, images: string[] }) => {
      console.log(response);
    //   // response.message.
    //   // new DogModel(response);
    //   // const keys = Object.keys(response.message).length
    //   // console.log(keys)
    })
  }

}
