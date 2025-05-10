import { PersonalForm } from "./PersonalForm.jsx";
import { ExperienceForm } from "./ExperienceForm.jsx";
import { EducationForm } from "./EducationForm.jsx";
import { ExperienceList } from "./ExperienceList.jsx";
import { EducationList } from "./EducationList.jsx";
import { useState } from "react";

export function CVForm({
  experienceData,
  educationData,
  selectedIds,
  dataMap,
  onEdit,
}) {
  const [isActiveExperience, setIsActiveExperience] = useState(false);
  const [isActiveEducation, setIsActiveEducation] = useState(false);

  const handleActiveExperience = (e) => {
    e.preventDefault();
    if (e.target.hasAttribute("data-toggle-true")) {
      setIsActiveExperience(true);
    }

    if (e.target.hasAttribute("data-toggle-false")) {
      setIsActiveExperience(false);
    }
  };

  const handleActiveEducation = (e) => {
    e.preventDefault();
    if (e.target.hasAttribute("data-toggle-true")) {
      setIsActiveEducation(true);
    }

    if (e.target.hasAttribute("data-toggle-false")) {
      setIsActiveEducation(false);
    }
  };

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
          isActive={isActiveExperience}
          toggleActive={handleActiveExperience}
        />
        <ExperienceList
          experienceData={experienceData}
          isActive={isActiveExperience}
          toggleActive={handleActiveExperience}
        />
      </div>
      <div className="edu-form-container">
        <EducationForm
          educationItem={educationItem}
          dataMap={dataMap}
          onChange={onEdit}
          isActive={isActiveEducation}
          toggleActive={handleActiveEducation}
        />
        <EducationList
          educationData={educationData}
          isActive={isActiveEducation}
          toggleActive={handleActiveEducation}
        />
      </div>
    </>
  );
}
