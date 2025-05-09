export function EducationForm({ educationItem, onChange }) {
  return (
    <fieldset className="education-form">
      <legend>Education</legend>

      <div className="edu-form-data" data-uuid={educationItem.id}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          onChange={onChange}
          value={educationItem.school}
        />

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          onChange={onChange}
          value={educationItem.degree}
        />

        <label htmlFor="edu-start-date">Start Date</label>
        <input
          type="text"
          id="edu-start-date"
          name="startDate"
          onChange={onChange}
          value={educationItem.startDate}
        />

        <label htmlFor="edu-end-date">End Date</label>
        <input
          type="text"
          id="edu-end-date"
          name="endDate"
          onChange={onChange}
          value={educationItem.endDate}
        />

        <label htmlFor="edu-location">Location</label>
        <input
          type="text"
          id="edu-location"
          name="location"
          onChange={onChange}
          value={educationItem.location}
        />
      </div>
    </fieldset>
  );
}
