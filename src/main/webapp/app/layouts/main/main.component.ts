import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { ActivatedRouteSnapshot} from '@angular/router';
declare var $: any;
@Component({
    selector: 'jhi-main',
    templateUrl: './main.component.html'
})
export class JhiMainComponent implements AfterViewInit {
    @ViewChild('calendar') calendar: ElementRef;
    constructor() {}

    private getPageTitle(routeSnapshot: ActivatedRouteSnapshot) {
        let title: string = (routeSnapshot.data && routeSnapshot.data['pageTitle']) ? routeSnapshot.data['pageTitle'] : 'fullcalendarExempleApp';
        if (routeSnapshot.firstChild) {
            title = this.getPageTitle(routeSnapshot.firstChild) || title;
        }
        return title;
    }
    ngAfterViewInit(): void {
        console.log($(this.calendar.nativeElement));
        // console.log(jQuery);
        $(this.calendar.nativeElement).fullCalendar({});
    }
}
