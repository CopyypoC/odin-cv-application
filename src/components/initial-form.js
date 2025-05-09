export const initialPersonalForm = {
  id: crypto.randomUUID(),
  name: "",
  email: "",
  phone: "",
  location: "",
};

export const initialExperienceForm = [
  {
    id: crypto.randomUUID(),
    section: "experience",
    company: "company 1",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  },
];

export const initialEducationForm = [
  {
    id: crypto.randomUUID(),
    section: "education",
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
];
