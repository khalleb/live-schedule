import { Component, OnInit } from '@angular/core';
import { LiveService } from 'src/app/shared/services/live.service'
import { Live } from 'src/app/shared/model/live.model'
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {
  livesPrevius: Live[]
  livesNext: Live[]

  constructor(public liveService: LiveService, public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previus').subscribe(
      data => {
        this.livesPrevius = data.results;
        this.livesPrevius.forEach(live => {
          live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
        })
        // this.livesPrevius = data.content;
      }, error => {
        console.error(error);
      }
    )

    // this.liveService.getLivesWithFlag('next').subscribe(
    //   data => {
    //     // this.livesNext = data.content;
    //     this.livesNext = data.results;
    // this.livesNext.forEach(live => {
    //   live.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(live.liveLink);
    // })
    //   }, error => {
    //     console.error(error);
    //   }
    // )
  }
}
