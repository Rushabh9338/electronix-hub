import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<video autoplay loop>
    <source src="assets/page-not-found-clip.mp4" type="video/mp4" />
  </video>`,
  styles: [
    `
      video {
        height: 100vh;
        width: 100vw;
        object-fit: fill;
      }
    `,
  ],
})
export class PageNotFoundComponent {}
