import { Component, OnInit } from '@angular/core';
import {CarouselItem} from "../../../shared/interfaces/shared.interface";
import {MessagesService} from "../../../services/messages.service";
import {SessionStorageService} from "../../../services/sessionStorage.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-other-info',
  templateUrl: './other-info.component.html',
  styles: [`
    .product-item .product-item-content {
        border: 1px solid var(--surface-d);
        border-radius: 3px;
        margin: .3rem;
        text-align: center;
        padding: 2rem 0;
        height: 100%;
      }

    .product-item .product-image {
      width: 50%;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
    }
  `]
})
export class OtherInfoComponent implements OnInit {

  responsiveOptions: any;
  languages: CarouselItem[] = [];
  mobility: CarouselItem[] = [];

  display: boolean = false;
  dialogImageUrl: string = '';

  //Internationalization
  sessionStorageObservable: Observable<any> = this.ss.watchStorage();
  readMoreText: string = this.ms.transaltions.general.readMore;
  seeCertificateText: string = this.ms.transaltions.general.seeCertificate;
  languagesText: string = this.ms.transaltions.general.languages;
  nativeText: string = this.ms.transaltions.otherInfo.nativeLevel;
  professionalText: string = this.ms.transaltions.otherInfo.professionalLevel;
  catalanText: string = this.ms.transaltions.otherInfo.catalan;
  spanishText: string = this.ms.transaltions.otherInfo.spanish;
  englishText: string = this.ms.transaltions.otherInfo.english;
  mobilityText: string = this.ms.transaltions.otherInfo.mobility;
  licensesText: string = this.ms.transaltions.otherInfo.licenses;
  vehicleText: string = this.ms.transaltions.otherInfo.vehicle;
  motorcycleText: string = this.ms.transaltions.otherInfo.motorcycle;
  carText: string = this.ms.transaltions.otherInfo.car;
  mobilityAvailText: string = this.ms.transaltions.otherInfo.mobilityAvail;
  andString: string = this.ms.transaltions.general.and;

  constructor(private ms: MessagesService,
              private ss: SessionStorageService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit(): void {
    this.updateTexts();
    this.sessionStorageObservable.subscribe(() => this.updateTexts());
  }

  updateTexts() {
    this.readMoreText = this.ms.transaltions.general.readMore;
    this.seeCertificateText = this.ms.transaltions.general.seeCertificate;
    this.languagesText = this.ms.transaltions.general.languages;
    this.nativeText = this.ms.transaltions.otherInfo.nativeLevel;
    this.professionalText = this.ms.transaltions.otherInfo.professionalLevel;
    this.catalanText = this.ms.transaltions.otherInfo.catalan;
    this.spanishText = this.ms.transaltions.otherInfo.spanish;
    this.englishText = this.ms.transaltions.otherInfo.english;
    this.mobilityText = this.ms.transaltions.otherInfo.mobility;
    this.licensesText = this.ms.transaltions.otherInfo.licenses;
    this.vehicleText = this.ms.transaltions.otherInfo.vehicle;
    this.motorcycleText = this.ms.transaltions.otherInfo.motorcycle;
    this.carText = this.ms.transaltions.otherInfo.car;
    this.mobilityAvailText = this.ms.transaltions.otherInfo.mobilityAvail;
    this.andString = this.ms.transaltions.general.and;

    this.languages = [
      {title: this.catalanText, subTitle: this.nativeText, imgUrl: 'assets/otherInfo/senyera.png'},
      {title: this.spanishText, subTitle: this.nativeText, imgUrl: 'assets/otherInfo/besp.jpg'},
      {title: this.englishText, subTitle: this.professionalText,
        imgUrl: 'assets/otherInfo/Flag_of_the_United_Kingdom_(3-5).svg.png', url: 'assets/otherInfo/FCE - B2.jpg'}
    ]

    this.mobility = [
      {title: this.licensesText, subTitle: `A, B (${this.carText} ${this.andString} ${this.motorcycleText})`, imgUrl: 'assets/otherInfo/tipos-de-carnet.png'},
      {title: this.vehicleText, subTitle: this.carText, imgUrl: 'assets/otherInfo/2019_Skoda_Scala_SE_TDi_1.6_Front.jpg'},
      {title: this.vehicleText, subTitle: this.motorcycleText, imgUrl: 'assets/otherInfo/2020-Triumph-Tiger-1200-Alpine-Edition-Adventure-Motorcycle-1-400x267.jpg'},
      {title: this.mobilityAvailText, subTitle: 'No', imgUrl: 'assets/otherInfo/GoogleMapTA.jpg'}
    ]
  }

  openImgDialog(imgUrl: string) {
    this.dialogImageUrl = imgUrl;
    this.display = true;
  }

}
