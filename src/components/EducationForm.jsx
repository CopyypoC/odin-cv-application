export function EducationForm() {
  return (
    <fieldset className="education">
      <legend>Education</legend>
      <div>
        <label htmlFor="school">School</label>
        <input type="text" id="school" />

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree" />

        <label htmlFor="edu-start-date">Start Date</label>
        <input type="date" id="edu-start-date" />

        <label htmlFor="edu-end-date">End Date</label>
        <input type="date" id="edu-end-date" />

        <label htmlFor="edu-location">Location</label>
        <input type="text" id="edu-location" />
      </div>
    </fieldset>
  );
}
