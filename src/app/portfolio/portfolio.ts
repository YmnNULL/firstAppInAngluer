import { Component } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-portfolio',
    imports: [NgClass],
    templateUrl: './portfolio.html',
    styleUrl: './portfolio.css'
})
export class Portfolio {
    layerVisible: boolean = false;
    currentImg: string | null = null;
    imgs: string[] = [
        "/img/portfolio/poert1.png",
        "/img/portfolio/port2.png",
        "/img/portfolio/port3.png",
    ]

    displayLayer(i: number) {
        const srcCurrentImg: string = this.imgs[i];
        this.currentImg = srcCurrentImg;
        this.layerVisible = true;
    }

    hideLayer(): void {
        this.layerVisible = false;
        this.currentImg = null;
    }
}
