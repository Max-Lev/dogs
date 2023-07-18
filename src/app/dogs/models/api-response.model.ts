import { IDog } from './dog.model';

export interface IResponse {
    message: {
        [key:string]:string[]
    };
    status: string;
}