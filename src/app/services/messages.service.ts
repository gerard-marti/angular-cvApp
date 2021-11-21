import {Injectable} from "@angular/core";
import {Translation} from "../shared/interfaces/shared.interface";

import MessagesEng from "src/app/shared/translations/messages.json"
import MessagesCa from "src/app/shared/translations/messages_ca.json"
import MessagesEs from "src/app/shared/translations/messages_es.json"

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private _messagesEng: Translation = MessagesEng;
  private _messagesCa: Translation = MessagesCa;
  private _messagesEs: Translation = MessagesEs;

  selectedLanguage: string = sessionStorage.getItem('selectedLanguage')!;

  constructor() {
  }

  get messagesEng() {
    return {...this._messagesEng};
  }

  get messagesEs() {
    return {...this._messagesEs};
  }

  get messagesCa() {
    return {...this._messagesCa};
  }

  get transaltions(): Translation{
    this.updateLocale();
    switch (this.selectedLanguage) {
      case 'es':
        return this.messagesEs;
      case 'eng':
        return this.messagesEng;
      case 'cat':
      default:
        return this.messagesCa;
    }
  }

  updateLocale() {
    this.selectedLanguage = sessionStorage.getItem('selectedLanguage')!;
  }


}
