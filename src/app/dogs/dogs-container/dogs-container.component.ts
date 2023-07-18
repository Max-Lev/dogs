import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { DogsService } from '../providers/dogs.service';
import { SIZE_LIST } from '../models/config';


@Component({
  selector: 'app-dogs-container',
  templateUrl: './dogs-container.component.html',
  styleUrls: ['./dogs-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsContainerComponent implements OnInit, AfterViewInit,OnDestroy {

  sizeList = SIZE_LIST;

  dogs$!: Observable<string[]>;

  images$!: Observable<string[]>;

  dogsForm: FormGroup;

  sub$:Subject<boolean> = new Subject();

  constructor(private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef,
    private dogsService: DogsService, private http: HttpClient) {

    this.dogsForm = this.formBuilder.group({
      breed: new FormControl<string | null>(null, [Validators.required]),
      size: new FormControl<number | null>(null)
    });

  }

  ngOnInit(): void {
    this.dogs$ = this.dogsService.getDogsList$();    
  }

  ngAfterViewInit(): void {
    this.getImages$();
  }

  ngOnDestroy(): void {
    this.sub$.next(false);
    this.sub$.unsubscribe();
  }


  getImages$() {
    this.dogsForm.valueChanges.pipe(takeUntil(this.sub$)).subscribe(val => {
      const { breed, size } = val
      if (breed !== null) {
        this.images$ = this.dogsService.getBreed$(breed, size);
      }
    });
  }

}

