import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtillityService } from 'src/app/appServices/design-utillity.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(private _design:DesignUtillityService) { }
obsMsg:any;
  ngOnInit(): void {

// Of
const obs1= of('Raja','Musaib','Gul');
   obs1.subscribe(res=>{
    console.log(res)
    this._design.print(res,'elContainer')
   });
   const obs2= of({a:'Raja',b:'Musaib',c:'Gul'} );
   obs2.subscribe(res=>{
  
    // this._design.print(res,'elContainer')
    this.obsMsg=res;
    console.log('obs',res)
   })

  //  From operator
  let Arr=['kohli','babar','stokes']
  // const obs3 = from(['arif','basit','ovais']);
  const obs3 =from(Arr)
  obs3.subscribe(res=>{
  
    this._design.print(res,'elContainer3')
    // this.obsMsg=res;
    console.log('obs',res)
   })

   //from promise
   const promise = new Promise(resolve=>{
    setTimeout(()=>{
    resolve('Promise is Resolved')
    },2000)
   })
  
  
  const obs4 = from (promise);

   obs4.subscribe(res=>{
    console.log('from promise',res)
    this._design.print(res,'elContainer4')
   })

   const obs5 = from ('welcome');

   obs5.subscribe(res=>{
    console.log('from string',res)
    this._design.print(res,'elContainer5')
   })
  }

}
