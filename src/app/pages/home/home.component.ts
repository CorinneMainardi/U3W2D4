import { PhotosService } from '../../service/photos.service';
import { IPhots } from './../../interface/i-phots';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  photos: IPhots[] = [];

  constructor(private photosSvc: PhotosService) {}

  ngOnInit() {
    this.photosSvc.getAllPhotos().subscribe((photos) => {
      this.photos = photos;
    });
  }
  deletePhoto(id: number) {
    this.photosSvc.deletePhoto(id).subscribe();
  }
  addToFavorite(photo: IPhots) {
    this.photosSvc.addToFavorite(photo);
  }
}
