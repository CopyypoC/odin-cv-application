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

      <div className="exp-section-container">
        {experienceSections.length > 0 ? <h3>Experience</h3> : null}
        {experienceSections}
      </div>

      <div className="edu-section-container">
        {educationSections.length > 0 ? <h3>Education</h3> : null}
        {educationSections}
      </div>
    </article>
  );
}
