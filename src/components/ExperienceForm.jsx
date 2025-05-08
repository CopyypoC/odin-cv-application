export function ExperienceForm() {
  return (
    <fieldset className="experience">
      <legend>Experience</legend>

      <div>
        <label htmlFor="company">Name</label>
        <input type="text" id="company" />

        <label htmlFor="position">Position</label>
        <input type="text" id="position" />

        <label htmlFor="exp-start-date">Start Date</label>
        <input type="date" id="exp-start-date" />

        <label htmlFor="exp-end-date">End Date</label>
        <input type="date" id="exp-end-date" />

        <label htmlFor="exp-location">Location</label>
        <input type="text" id="exp-location" />

        <label htmlFor="description">Description</label>
        <input type="textarea" id="description" />
      </div>
    </fieldset>
  );
}
