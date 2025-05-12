export const initialPersonalForm = [
  {
    id: crypto.randomUUID(),
    section: "personal",
    name: "Ashley Williams",
    email: "ashley.williams@internet.com",
    phone: "(123) 123-1234",
    location: "London, UK",
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

export const initialExperienceData = [
  {
    id: crypto.randomUUID(),
    section: "experience",
    company: "Big Tech Company, LLC Inc. Corp.",
    position: "Chief Executive Officer President Chairman",
    startDate: "Apr 20, 1969",
    endDate: "present",
    location: "Antarctica, AN",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit.",
  },
];

export const initialEducationData = [
  {
    id: crypto.randomUUID(),
    section: "education",
    school: "University of Education",
    degree: "Doctorate in Smartness",
    startDate: "123 BC",
    endDate: "AD 321",
    location: "Jupiter, JU",
  },
];
