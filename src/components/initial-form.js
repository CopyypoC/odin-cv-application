export const initialPersonalForm = [
  {
    id: crypto.randomUUID(),
    section: "personal",
    name: "",
    email: "",
    phone: "",
    location: "",
  },
];

export class ExperienceItem {
  constructor() {
    this.id = crypto.randomUUID();
    this.section = "experience";
    this.company = "";
    this.position = "";
    this.startDate = "";
    this.endDate = "";
    this.location = "";
    this.description = "";
  }
}

export class EducationItem {
  constructor() {
    this.id = crypto.randomUUID();
    this.section = "education";
    this.school = "";
    this.degree = "";
    this.startDate = "";
    this.endDate = "";
    this.location = "";
  }
}
