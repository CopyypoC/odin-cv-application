export function PersonalForm({ personalData }) {
  return (
    <fieldset className="personal-form">
      <legend>Personal Details</legend>

      <div className="personal-form-data" data-uuid={personalData.id}>
        <label htmlFor="personal-name">Name</label>
        <input type="text" id="personal-name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" />

        <label htmlFor="personal-location">Location</label>
        <input type="text" id="personal-location" />
      </div>
    </fieldset>
  );
}
