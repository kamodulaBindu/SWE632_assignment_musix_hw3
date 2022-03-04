import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TracksService } from '../track.service';
import { ChangeDetectionRef } from 'bootstrap';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { MatCarouselSlide, MatCarouselSlideComponent } from '@ngmodule/material-carousel';
import { from } from 'rxjs';
import { error } from 'util';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class TrackListComponent implements OnInit {
 
  constructor() { }


  ngOnInit() {
    
  }
  
}

