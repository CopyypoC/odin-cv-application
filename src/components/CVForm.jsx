export function CVForm({ personalData, experienceData, educationData }) {
  return (
    <form action="">
      <PersonalForm personalData={personalData} />
      <ExperienceForm experienceData={experienceData} />
      <EducationForm educationData={educationData} />
    </form>
  );
}
