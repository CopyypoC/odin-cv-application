import { ExperienceSection } from "./ExperienceSection.jsx";
import { EducationSection } from "./EducationSection.jsx";
import { PersonalSection } from "./PersonalSection.jsx";

export function GeneratedCV({ personalData, experienceData, educationData }) {
  const personalItem = personalData[0];
  const experienceSections = experienceData.map((item) => {
    return <ExperienceSection key={item.id} experienceItem={item} />;
  });
  const educationSections = educationData.map((item) => {
    return <EducationSection key={item.id} educationItem={item} />;
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
