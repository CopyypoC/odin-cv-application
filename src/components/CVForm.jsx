import { PersonalForm } from "./PersonalForm.jsx";
import { ExperienceForm } from "./ExperienceForm.jsx";
import { EducationForm } from "./EducationForm.jsx";

export function CVForm({
  personalData,
  experienceData,
  educationData,
  selectedIds,
  dataMap,
  onEdit,
}) {
  const experienceItem = experienceData.find(
    (item) => item.id === selectedIds.experience
  );

  const educationItem = educationData.find(
    (item) => item.id === selectedIds.education
  );

  return (
    <form className="cv-form">
      <PersonalForm personalData={personalData} />
      <ExperienceForm
        experienceItem={experienceItem}
        onChange={onEdit}
        dataMap={dataMap}
      />
      <EducationForm
        educationItem={educationItem}
        dataMap={dataMap}
        onChange={onEdit}
      />
    </form>
  );
}
