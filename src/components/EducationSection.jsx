export function EducationSection({ educationItem }) {
  return (
    <section className="edu-item item">
      <div className="edu-item-group item-left">
        <p className="edu-item-date">
          {educationItem.startDate ? educationItem.startDate + " - " : null}
          {educationItem.endDate}
        </p>
        <p className="edu-item-location">{educationItem.location}</p>
      </div>
      <div className="edu-item-group item-right">
        <p className="edu-item-school item-heading">{educationItem.school}</p>
        <p className="edu-item-degree">{educationItem.degree}</p>
      </div>
    </section>
  );
}
