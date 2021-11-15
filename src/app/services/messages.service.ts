import {Injectable} from "@angular/core";
import {Translation} from "../shared/interfaces/shared.interface";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  selectedLanguage: string = sessionStorage.getItem('selectedLanguage')!;

  constructor() {
  }

  get transaltions(): Translation[]{
    this.updateLocale();
    switch (this.selectedLanguage) {
      case 'es':
        console.log('es');
        return([
          {key: 'dock_summary',   message: 'Resumen'},
          {key: 'dock_studies',   message: 'Estudios'},
          {key: 'dock_prof_exp',  message: 'Experiencia profesional'},
          {key: 'dock_skills',    message: 'Habilidades'},
          {key: 'dock_other',     message: 'Otra información'}
        ])
      case 'eng':
        console.log('eng');
        return([
          {key: 'dock_summary',   message: 'Summary'},
          {key: 'dock_studies',   message: 'Studies'},
          {key: 'dock_prof_exp',  message: 'Professional Experience'},
          {key: 'dock_skills',    message: 'Skills'},
          {key: 'dock_other',     message: 'Other Info'}
        ])
      case 'cat':
      default:
        console.log('cat');
        return([
          {key: 'dock_summary',   message: 'Resum'},
          {key: 'dock_studies',   message: 'Estudis'},
          {key: 'dock_prof_exp',  message: 'Experiència professional'},
          {key: 'dock_skills',    message: 'Habilitats'},
          {key: 'dock_other',     message: 'Altre informació'}
        ])
    }
  }

  updateLocale() {
    this.selectedLanguage = sessionStorage.getItem('selectedLanguage')!;
  }

  getMessage ( messageKey: string ): string {
    return this.transaltions.find(({key}) => key === messageKey)?.message || '';
  }


}
