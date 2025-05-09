import { PersonalForm } from "./PersonalForm.jsx";
import { ExperienceForm } from "./ExperienceForm.jsx";
import { EducationForm } from "./EducationForm.jsx";

export function CVForm({
  personalData,
  experienceData,
  educationData,
  selectedIds,
}) {
  const filterExp = experienceData.filter((item) => {
    if (item.id === selectedIds.experience) return item;
  });
  const experienceItem = filterExp[0];

  const filterEdu = educationData.filter((item) => {
    if (item.id === selectedIds.education) return item;
  });
  const educationItem = filterEdu[0];

  return (
    <form className="cv-form">
      <PersonalForm personalData={personalData} />
      <ExperienceForm experienceItem={experienceItem} />
      <EducationForm educationItem={educationItem} />
    </form>
  );
}
