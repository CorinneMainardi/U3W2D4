import { Component } from '@angular/core';
import { IPhots } from '../../interface/i-phots';
import { PhotosService } from '../../service/photos.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  favouritesArr: IPhots[] = [];

  constructor(private photoSvc: PhotosService) {}
  ngOnInit() {
    this.photoSvc.favourites$.subscribe((photo) => {
      if (!this.favouritesArr.some((p) => p.id === photo.id)) {
        //some cop
        this.favouritesArr.push(photo);
      }
    });
  }
}
