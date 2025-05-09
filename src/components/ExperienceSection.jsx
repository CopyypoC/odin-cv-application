export function ExperienceSection({ experienceItem }) {
  return (
    <section className="exp-item">
      <p className="company-name">{experienceItem.company}</p>
      <p>{experienceItem.position}</p>
      <p>{experienceItem.startDate}</p>
      <p>{experienceItem.endDate}</p>
      <p>{experienceItem.endDate}</p>
      <p>{experienceItem.location}</p>
      <p>{experienceItem.description}</p>
    </section>
  );
}
