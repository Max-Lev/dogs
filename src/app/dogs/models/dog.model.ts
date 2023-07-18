import { IResponse } from './api-response.model';

// export interface ISubBreed {
//     breedName: string;
// }
export interface IDog {
    [key: string]: string[];
}

export class Dog {
    breedName: string = '';
    images: string[] = [];
    constructor(name: string, images?: string[]) {
        this.breedName = name;
        this.images = images || [];
        // this.subBreed = subBreed;
        // console.log('Dog ', this);
    }

}

export class DogModel {

    dogsList: Dog[] = [];

    constructor() {
        console.log(this)
    }

    addList(dog: Dog) {
        this.dogsList.push(dog);
        // console.log(this)
    }

}