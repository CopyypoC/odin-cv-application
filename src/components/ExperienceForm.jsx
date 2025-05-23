import { FaBriefcase } from "react-icons/fa";

export function ExperienceForm({
  experienceItem,
  onChange,
  dataMap,
  isActive,
  toggleActive,
  onSelectId,
}) {
  const experienceData = dataMap.experience.experienceData;
  const setExperienceData = dataMap.experience.setExperienceData;

  return (
    <form
      className={"cv-form exp-form " + (isActive ? "active " : "inactive")}
      inert={isActive ? undefined : true}
    >
      <legend>
        <FaBriefcase className="form-icon" size={32} />
        <h2>Experience</h2>
      </legend>

      <div className="exp-form-data">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          onChange={(e) =>
            onChange(
              experienceData,
              e,
              setExperienceData,
              experienceItem.section
            )
          }
          value={experienceItem ? experienceItem.company : ""}
        />

        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          onChange={(e) =>
            onChange(
              experienceData,
              e,
              setExperienceData,
              experienceItem.section
            )
          }
          value={experienceItem ? experienceItem.position : ""}
        />

        <div className="date-container">
          <div className="date-left">
            <label htmlFor="exp-start-date">Start Date</label>
            <input
              type="text"
              id="exp-start-date"
              name="startDate"
              onChange={(e) =>
                onChange(
                  experienceData,
                  e,
                  setExperienceData,
                  experienceItem.section
                )
              }
              value={experienceItem ? experienceItem.startDate : ""}
            />
          </div>
          <div className="date-right">
            <label htmlFor="exp-end-date">End Date</label>
            <input
              type="text"
              id="exp-end-date"
              name="endDate"
              onChange={(e) =>
                onChange(
                  experienceData,
                  e,
                  setExperienceData,
                  experienceItem.section
                )
              }
              value={experienceItem ? experienceItem.endDate : ""}
            />
          </div>
        </div>

        <label htmlFor="exp-location">Location</label>
        <input
          type="text"
          id="exp-location"
          name="location"
          onChange={(e) =>
            onChange(
              experienceData,
              e,
              setExperienceData,
              experienceItem.section
            )
          }
          value={experienceItem ? experienceItem.location : ""}
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          onChange={(e) =>
            onChange(
              experienceData,
              e,
              setExperienceData,
              experienceItem.section
            )
          }
          value={experienceItem ? experienceItem.description : ""}
        ></textarea>
      </div>

      <button
        type="submit"
        className="save-btn"
        data-toggle-false
        onClick={(e) => {
          toggleActive(e);
          onSelectId(e, "experience");
        }}
      >
        Save
      </button>
    </form>
  );
}
