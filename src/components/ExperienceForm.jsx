export function ExperienceForm({
  experienceItem,
  onChange,
  dataMap,
  isActive,
  toggleActive,
}) {
  const experienceData = dataMap.experience.experienceData;
  const setExperienceData = dataMap.experience.setExperienceData;

  return (
    <form
      className={"cv-form exp-form " + (isActive ? "active " : "inactive")}
      inert={isActive ? undefined : true}
    >
      <legend>Experience</legend>

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
        <input
          type="textarea"
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
