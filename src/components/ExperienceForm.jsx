export function ExperienceForm({ experienceItem }) {
  return (
    <fieldset className="experience-form">
      <legend>Experience</legend>

      <div className="exp-form-data" data-uuid={experienceItem.id}>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={experienceItem.company}
        />

        <label htmlFor="position">Position</label>
        <input type="text" id="position" name="position" />

        <label htmlFor="exp-start-date">Start Date</label>
        <input type="date" id="exp-start-date" name="startDate" />

        <label htmlFor="exp-end-date">End Date</label>
        <input type="date" id="exp-end-date" name="endDate" />

        <label htmlFor="exp-location">Location</label>
        <input type="text" id="exp-location" name="location" />

        <label htmlFor="description">Description</label>
        <input type="textarea" id="description" name="description" />
      </div>
    </fieldset>
  );
}
