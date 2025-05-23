export function ExperienceSection({ experienceItem }) {
  return (
    <section className="exp-item item">
      <div className="exp-item-group item-left">
        <p className="exp-item-date">
          {experienceItem.startDate ? experienceItem.startDate + " - " : null}
          {experienceItem.endDate}
        </p>
        <p className="exp-item-location">{experienceItem.location}</p>
      </div>
      <div className="exp-item-group item-right">
        <p className="exp-item-company item-heading">
          {experienceItem.company}
        </p>
        <p className="exp-item-position">{experienceItem.position}</p>
        <p className="exp-item-description">{experienceItem.description}</p>
      </div>
    </section>
  );
}
