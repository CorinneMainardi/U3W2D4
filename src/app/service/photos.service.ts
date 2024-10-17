import { IPhots } from './../interface/i-phots';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  favourites$ = new ReplaySubject<IPhots>();

  constructor(private http: HttpClient) {}

  getAllPhotos(): Observable<IPhots[]> {
    return this.http
      .get<IPhots[]>(this.apiUrl)
      .pipe(map((photo) => photo.slice(0, 15)));
  }

  deletePhoto(id: number) {
    return this.http.delete<IPhots>(`${this.apiUrl}/${id}`);
  }
  addToFavorite(photo: IPhots) {
    this.favourites$.next(photo);
  }
}
