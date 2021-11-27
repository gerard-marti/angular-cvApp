export interface EmailResponseInterface {
  ok: boolean;
  message: string;
}

export interface Skill {
  name: string;
  img: string;
  rating: number;
  yearsExp: string;
}

export interface CarouselItem {
  title: string;
  subTitle: string;
  imgUrl: string;
  url?: string;
}

export interface Translation {
  dockMenu: DockMenu;
  form: Form;
  mail: Mail;
  general: General;
  studies: Studies;
  summary: Summary;
  professionalExp: ProfessionalExp;
  skills: Skills;
  otherInfo: OtherInfo;
}

interface General {
  success: string;
  error: string;
  readMore: string;
  seeCertificate: string;
  requiredField: string;
  requiredMail: string;
  mailFormat: string;
  and: string;
  languages: string;
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

interface ProfessionalExp {
  dialogContentIdiadaSD: string;
  dialogContentIdiadaACE: string;
  dialogContentVW: string;
  careerPath: string;
  volunteering: string;
}

interface Skills {
  yearString: string;
  yearsString: string;
  monthString: string;
  monthsString: string;
  yearsOfExp: string;
  skill: string;
}

interface OtherInfo {
  nativeLevel: string;
  professionalLevel: string;
  catalan: string;
  spanish: string;
  english: string;
  mobility: string;
  licenses: string;
  vehicle: string;
  motorcycle: string;
  car: string;
  mobilityAvail: string;
}
