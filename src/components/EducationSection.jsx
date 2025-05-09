export function EducationSection({ educationItem }) {
  return (
    <section className="edu-item">
      <p className="school-name">{educationItem.school}</p>
      <p>{educationItem.degree}</p>
      <p>{educationItem.startDate}</p>
      <p>{educationItem.endDate}</p>
      <p>{educationItem.endDate}</p>
      <p>{educationItem.location}</p>
    </section>
  );
}
