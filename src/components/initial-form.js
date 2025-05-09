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
    company: "asdjkhfklasdfjalsdfjdhaklj",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  },
  {
    id: crypto.randomUUID(),
    company: "",
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
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
  {
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  },
];
