
export interface Translation {
  dockMenu: DockMenu;
  form: Form;
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
