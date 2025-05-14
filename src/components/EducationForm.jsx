import { FaSchool } from "react-icons/fa";

export function EducationForm({
  educationItem,
  onChange,
  dataMap,
  isActive,
  toggleActive,
  onSelectId,
}) {
  const educationData = dataMap.education.educationData;
  const setEducationData = dataMap.education.setEducationData;

  return (
    <form
      className={"cv-form edu-form " + (isActive ? "active " : "inactive")}
      inert={isActive ? undefined : true}
    >
      <legend>
        {" "}
        <FaSchool className="form-icon" size={32} />
        <h2>Education</h2>
      </legend>

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

        <div className="date-container">
          <div className="date-left">
            <label htmlFor="edu-start-date">Start Date</label>
            <input
              type="text"
              id="edu-start-date"
              name="startDate"
              onChange={(e) => {
                onChange(
                  educationData,
                  e,
                  setEducationData,
                  educationItem.section
                );
              }}
              value={educationItem ? educationItem.startDate : ""}
            />
          </div>
          <div className="date-right">
            <label htmlFor="edu-end-date">End Date</label>
            <input
              type="text"
              id="edu-end-date"
              name="endDate"
              onChange={(e) => {
                onChange(
                  educationData,
                  e,
                  setEducationData,
                  educationItem.section
                );
              }}
              value={educationItem ? educationItem.endDate : ""}
            />
          </div>
        </div>

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

      <button
        type="submit"
        className="save-btn"
        data-toggle-false
        onClick={(e) => {
          toggleActive(e);
          onSelectId(e, "education");
        }}
      >
        Save
      </button>
    </form>
  );
}
