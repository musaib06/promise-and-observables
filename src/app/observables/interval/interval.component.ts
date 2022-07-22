import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtillityService } from 'src/app/appServices/design-utillity.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
obsMsg:any;
 videoSubscription:Subscription |any;

  constructor(private _design:DesignUtillityService) { }

  ngOnInit(): void {
    // const broadCastVideo = interval(2000);
// timer(delay,interval)
    const broadCastVideo=timer(5000,1000)
   this.videoSubscription= broadCastVideo.subscribe(res=>{
      console.log(res)
      this.obsMsg= 'video'+res;
      this._design.print(this.obsMsg,'elContainer')
      this._design.print(this.obsMsg,'elContainer2')
      this._design.print(this.obsMsg,'elContainer3')

      if(res>=5){
        this.videoSubscription.unsubscribe()
      
      }   
    })
   
  }


}
