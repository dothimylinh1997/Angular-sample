// import {Component, OnInit} from '@angular/core';

// @Component ({
//     selector: 'app-container',
//     template:`
//         <app-header></app-header>
//         <app-menu-controls></app-menu-controls>
//         <app-content></app-content>
//     `,
//     styleUrls: ['container.component.css']
// })

// export class ContainerComponent{
//     folderName : String = 'Janeto';
//     now : Date = new Date(Date.now());
//     imgUrl: String = 'http://dienhoathanglong.vn/sites/d/dh/dhtl/cache/images/Products/347/product_image_gallery/350x350/lang-hoa-hong-do-dep-1.jpg';
//     textValue : String = 'Janeto';
//     files: any[]=[{
//         name: 'Angular',
//         modified : new Date(Date.now()),
//         member : 'Linh'
//     },
//     {
//         name: 'Angular 2',
//         modified : new Date(Date.now()),
//         member : 'Hue'
//     },
//     {
//         name: 'Angular 5',
//         modified : new Date(Date.now()),
//         member : 'Linh2'
//     },
// ];
//     constructor(){}

    // gotoFolder(){
    //     this.folderName = 'JTC Share > Demo';
    // }
    // gotoBack(){
    //     this.folderName = 'JTC Share';
    // }
//}

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: 'container.component.html',
    styleUrls: ['container.component.scss']
})

export class ContainerComponent {
    company: String = 'Janeto';
    now: Date = new Date(Date.now());
    imgUrl: String = 'assets/logo-white.png';
    textValue: String = 'Janeto';
    files: any[] = [{
        name: 'Angular',
        modified: new Date(Date.now()),
        members: ['Kien', 'Hue'],
        type: 'folder'
    }, {
        name: 'Janeto Intro',
        modified: new Date(Date.now()),
        members: ['Kha', 'Linh'],
        type: 'folder'
    }, {
        name: 'Nodejs',
        modified: new Date(Date.now()),
        members: ['Khanh', 'Huy'],
        type: 'docx'
    }];
    folder: String = 'Home';
    constructor() { }

    changeImage() {
        this.imgUrl = this.imgUrl === 'assets/logo-janeto.png'
            ? 'assets/logo-white.png' : 'assets/logo-janeto.png';
    }

    changeText(value) {
        console.log(value);
    }

    check() {
        console.log(this.company);
    }

    changeFolder(name) {
        this.folder = name;
    }
}
export interface IFile{
    name : String;
    modified : Date;
    members : String;
    type: String;
}