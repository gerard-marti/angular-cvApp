
export interface EmailResponseInterface {
  ok: boolean;
  message: string;
}

export interface Translation {
  dockMenu: DockMenu;
  form: Form;
  mail: Mail;
  general: General;
  studies: Studies;
  summary: Summary;
}

interface General {
  success: string;
  error: string;
  readMore: string;
  requiredField: string;
  requiredMail: string;
  mailFormat: string;
}
interface Mail {
  successMsg: string;
  errorMsg: string;
  contactMe: string;
}

interface DockMenu {
  summary: string;
  studies: string;
  prof_exp: string;
  skills: string;
  other: string;
}

interface Form {
  name: string;
  email: string;
  subject: string;
  message: string;
  placeholders: Placeholders;
  buttons: Buttons;
}

interface Placeholders {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Buttons {
  send_email: string;
}

interface Studies {
  officialStudies: string;
  unOfficialStudies: string;
  masterTitle: string;
  degreeTitle: string;
  bachelorTitle: string;
  unOfficialStudyTitle1: string;
}

interface Summary {
  mainText1: string;
  mainText2: string;
  mainText3: string;
  mainText4: string;
}
