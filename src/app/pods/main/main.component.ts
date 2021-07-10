import {BreakpointObserver, Breakpoints, MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor( private breakpointObserver: BreakpointObserver, private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher ){
    this.mobileQuery = media.matchMedia('(max-width:600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    // tslint:disable-next-line: deprecation
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( res => {
      if ( res.breakpoints[Breakpoints.XSmall] ) {
        console.log('xSmall');
      }
      if ( res.breakpoints[Breakpoints.Small] ) {
        console.log('small');
      }
      if ( res.breakpoints[Breakpoints.Medium] ) {
        console.log('medium');
      }
      if ( res.breakpoints[Breakpoints.Large] ) {
        console.log('large');
      }
      if ( res.breakpoints[Breakpoints.XLarge] ) {
        console.log('xLarge');
      }
    });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy(){
    // tslint:disable-next-line: deprecation
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  // tslint:disable-next-line: member-ordering
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
