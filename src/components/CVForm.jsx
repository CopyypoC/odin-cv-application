import { PersonalForm } from "./PersonalForm.jsx";
import { ExperienceForm } from "./ExperienceForm.jsx";
import { EducationForm } from "./EducationForm.jsx";
import { ExperienceList } from "./ExperienceList.jsx";
import { EducationList } from "./EducationList.jsx";

export function CVForm({
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
    <>
      <div className="personal-form-container">
        <PersonalForm dataMap={dataMap} onChange={onEdit} />
      </div>
      <div className="exp-form-container">
        <ExperienceForm
          experienceItem={experienceItem}
          onChange={onEdit}
          dataMap={dataMap}
        />
        <ExperienceList experienceData={experienceData} />
      </div>
      <div className="edu-form-container">
        <EducationForm
          educationItem={educationItem}
          dataMap={dataMap}
          onChange={onEdit}
        />{" "}
        <EducationList educationData={educationData} />
      </div>
    </>
  );
}
