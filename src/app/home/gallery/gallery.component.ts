import { Component, OnInit } from '@angular/core';
import baguetteBox from 'baguettebox.js';
@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
    baguetteBox.run('.gallery', {
      captions: true, // display image captions.
      buttons: true, // arrows navigation
      async: false,
      preload: 2,
      animation: 'fadeIn' // fadeIn or slideIn
    });

  }

}
