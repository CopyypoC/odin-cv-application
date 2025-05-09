export function EducationForm({ educationItem, onChange, dataMap }) {
  const educationData = dataMap.education.educationData;
  const setEducationData = dataMap.education.setEducationData;

  return (
    <fieldset className="education-form">
      <legend>Education</legend>

      <div className="edu-form-data" data-uuid={educationItem.id}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem.school}
        />

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem.degree}
        />

        <label htmlFor="edu-start-date">Start Date</label>
        <input
          type="text"
          id="edu-start-date"
          name="startDate"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem.startDate}
        />

        <label htmlFor="edu-end-date">End Date</label>
        <input
          type="text"
          id="edu-end-date"
          name="endDate"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem.endDate}
        />

        <label htmlFor="edu-location">Location</label>
        <input
          type="text"
          id="edu-location"
          name="location"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem.location}
        />
      </div>
    </fieldset>
  );
}
