import { PersonalForm } from "./PersonalForm.jsx";
import { ExperienceForm } from "./ExperienceForm.jsx";
import { EducationForm } from "./EducationForm.jsx";

export function CVForm({ personalData, experienceData, educationData }) {
  return (
    <form className="cv-form">
      <PersonalForm personalData={personalData} />
      <ExperienceForm experienceData={experienceData} />
      <EducationForm educationData={educationData} />
    </form>
  );
}
