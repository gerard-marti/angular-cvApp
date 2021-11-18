
export interface EmailResponseInterface {
  ok: boolean;
  message: string;
}

export interface Translation {
  dockMenu: DockMenu;
  form: Form;
  mail: Mail;
  general: General;
}

interface General {
  success: string;
  error: string;
}
interface Mail {
  successMsg: string;
  errorMsg: string;
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
