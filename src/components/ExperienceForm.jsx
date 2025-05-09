export function ExperienceForm({ experienceItem, onChange }) {
  return (
    <fieldset className="experience-form">
      <legend>Experience</legend>

      <div className="exp-form-data" data-uuid={experienceItem.id}>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          onChange={onChange}
          value={experienceItem.company}
        />

        <label htmlFor="position">Position</label>
        <input
          type="text"
          id="position"
          name="position"
          onChange={onChange}
          value={experienceItem.position}
        />

        <label htmlFor="exp-start-date">Start Date</label>
        <input
          type="text"
          id="exp-start-date"
          name="startDate"
          onChange={onChange}
          value={experienceItem.startDate}
        />

        <label htmlFor="exp-end-date">End Date</label>
        <input
          type="text"
          id="exp-end-date"
          name="endDate"
          onChange={onChange}
          value={experienceItem.endDate}
        />

        <label htmlFor="exp-location">Location</label>
        <input
          type="text"
          id="exp-location"
          name="location"
          onChange={onChange}
          value={experienceItem.location}
        />

        <label htmlFor="description">Description</label>
        <input
          type="textarea"
          id="description"
          name="description"
          onChange={onChange}
          value={experienceItem.description}
        />
      </div>
    </fieldset>
  );
}
