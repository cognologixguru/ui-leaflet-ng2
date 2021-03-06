import { ElementRef, OnChanges, OnInit } from '@angular/core';
import { LeafletComponent } from '../components/leaflet.component';
import { LeafletService } from '../services/leaflet.service';
/**
 * Center directive for ui-leaflet-ng2.
 *
 * @author Michael Salgado <elesdoar@gmail.com>
 */
export declare class CenterDirective implements OnInit, OnChanges {
    private el;
    private uiLeaflet;
    private leafletService;
    lfCenter: any;
    constructor(el: ElementRef, uiLeaflet: LeafletComponent, leafletService: LeafletService);
    private changeCenter();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
}
