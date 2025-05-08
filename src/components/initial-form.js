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
    companyName: "",
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
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
];
