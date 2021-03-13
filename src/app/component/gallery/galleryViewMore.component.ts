import { Component, OnInit } from '@angular/core';
import galleryList from '../../../assets/data/galleryList.json';

@Component({
  selector: 'app-galleryView',
  templateUrl: './galleryViewMore.component.html',
  styleUrls: ['./galleryViewMore.component.css']
})
export class GalleryComponentView implements OnInit {
 public galleryVal:{galleryUrl:string}[] = galleryList;

  constructor() { }

  ngOnInit(): void {
  }

}
