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
          {key: 'dock_summary',               message: 'Resumen'},
          {key: 'dock_studies',               message: 'Estudios'},
          {key: 'dock_prof_exp',              message: 'Experiencia profesional'},
          {key: 'dock_skills',                message: 'Habilidades'},
          {key: 'dock_other',                 message: 'Otra información'},
          {key: 'form_name',                  message: 'Nombre'},
          {key: 'form_email',                 message: 'Email'},
          {key: 'form_subject',               message: 'Asunto'},
          {key: 'form_message',               message: 'Mensaje'},
          {key: 'form_placeholder_name',      message: 'Escribe tu nombre'},
          {key: 'form_placeholder_email',     message: 'Escribe tu correo'},
          {key: 'form_placeholder_subject',   message: 'Escribe el asunto del mensaje'},
          {key: 'form_placeholder_message',   message: 'Escribe el mensaje'},
          {key: 'form_send_mail',             message: 'Enviar correo'}
        ])
      case 'eng':
        console.log('eng');
        return([
          {key: 'dock_summary',               message: 'Summary'},
          {key: 'dock_studies',               message: 'Studies'},
          {key: 'dock_prof_exp',              message: 'Professional Experience'},
          {key: 'dock_skills',                message: 'Skills'},
          {key: 'dock_other',                 message: 'Other Info'},
          {key: 'form_name',                  message: 'Name'},
          {key: 'form_email',                 message: 'Email'},
          {key: 'form_subject',               message: 'Subject'},
          {key: 'form_message',               message: 'Message'},
          {key: 'form_placeholder_name',      message: 'Write your name'},
          {key: 'form_placeholder_email',     message: 'Write your mail'},
          {key: 'form_placeholder_subject',   message: 'Write the email subject'},
          {key: 'form_placeholder_message',   message: 'Write the message'},
          {key: 'form_send_mail',             message: 'Send mail'}
        ])
      case 'cat':
      default:
        console.log('cat');
        return([
          {key: 'dock_summary',               message: 'Resum'},
          {key: 'dock_studies',               message: 'Estudis'},
          {key: 'dock_prof_exp',              message: 'Experiència professional'},
          {key: 'dock_skills',                message: 'Habilitats'},
          {key: 'dock_other',                 message: 'Altre informació'},
          {key: 'form_name',                  message: 'Nom'},
          {key: 'form_email',                 message: 'Correu'},
          {key: 'form_subject',               message: 'Assumpte'},
          {key: 'form_message',               message: 'Missatge'},
          {key: 'form_placeholder_name',      message: 'Escriu el teu nom'},
          {key: 'form_placeholder_email',     message: 'Escriu el teu correu'},
          {key: 'form_placeholder_subject',   message: 'Escriu l\'assumpte del missatge'},
          {key: 'form_placeholder_message',   message: 'Escriu el missatge'},
          {key: 'form_send_mail',             message: 'Enviar correu'}
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
