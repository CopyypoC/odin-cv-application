import { ExperienceSection } from "./ExperienceSection.jsx";
import { EducationSection } from "./EducationSection.jsx";
import { PersonalSection } from "./PersonalSection.jsx";

export function GeneratedCV({ personalData, experienceData, educationData }) {
  const personalItem = personalData[0];
  const experienceSections = experienceData.map((item) => {
    return <ExperienceSection experienceItem={item} />;
  });
  const educationSections = educationData.map((item) => {
    return <EducationSection educationItem={item} />;
  });

  return (
    <article className="cv">
      <PersonalSection personalItem={personalItem} />
      <h3>Experience</h3>
      {experienceSections}
      <h3>Education</h3>
      {educationSections}
    </article>
  );
}
