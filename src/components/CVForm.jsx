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
        <form className="cv-form personal-form">
          <PersonalForm dataMap={dataMap} onChange={onEdit} />
        </form>
      </div>
      <div className="exp-form-container">
        <form className="cv-form exp-form">
          <ExperienceForm
            experienceItem={experienceItem}
            onChange={onEdit}
            dataMap={dataMap}
          />
        </form>
        <ExperienceList experienceData={experienceData} />
      </div>
      <div className="edu-form-container">
        <form className="cv-form edu-form">
          <EducationForm
            educationItem={educationItem}
            dataMap={dataMap}
            onChange={onEdit}
          />
        </form>
        <EducationList educationData={educationData} />
      </div>
    </>
  );
}
