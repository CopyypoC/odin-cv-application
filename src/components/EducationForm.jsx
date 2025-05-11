export function EducationForm({
  educationItem,
  onChange,
  dataMap,
  isActive,
  toggleActive,
}) {
  const educationData = dataMap.education.educationData;
  const setEducationData = dataMap.education.setEducationData;

  return (
    <form
      className={"cv-form edu-form " + (isActive ? "active " : "inactive")}
      inert={isActive ? undefined : true}
    >
      <legend>Education</legend>

      <div className="edu-form-data">
        <label htmlFor="school">School</label>
        <input
          type="text"
          id="school"
          name="school"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem ? educationItem.school : ""}
        />

        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem ? educationItem.degree : ""}
        />

        <label htmlFor="edu-start-date">Start Date</label>
        <input
          type="text"
          id="edu-start-date"
          name="startDate"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem ? educationItem.startDate : ""}
        />

        <label htmlFor="edu-end-date">End Date</label>
        <input
          type="text"
          id="edu-end-date"
          name="endDate"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem ? educationItem.endDate : ""}
        />

        <label htmlFor="edu-location">Location</label>
        <input
          type="text"
          id="edu-location"
          name="location"
          onChange={(e) => {
            onChange(educationData, e, setEducationData, educationItem.section);
          }}
          value={educationItem ? educationItem.location : ""}
        />
      </div>

      <button type="button" data-toggle-false onClick={toggleActive}>
        Cancel
      </button>
      <button type="submit" data-toggle-false onClick={toggleActive}>
        Save
      </button>
    </form>
  );
}
