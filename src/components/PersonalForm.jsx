export function PersonalForm({ dataMap, onChange }) {
  const personalData = dataMap.personal.personalData;
  const personalItem = dataMap.personal.personalData[0];
  const setPersonalData = dataMap.personal.setPersonalData;

  return (
    <form className="cv-form personal-form">
      <fieldset>
        <legend>Personal Details</legend>

        <div
          className="personal-form-data"
          data-uuid={dataMap.personal.personalData.id}
        >
          <label htmlFor="personal-name">Name</label>
          <input
            type="text"
            id="personal-name"
            value={personalItem.name}
            name="name"
            onChange={(e) => {
              onChange(personalData, e, setPersonalData, personalItem.section);
            }}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={personalItem.email}
            name="email"
            onChange={(e) => {
              onChange(personalData, e, setPersonalData, personalItem.section);
            }}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={personalItem.phone}
            name="phone"
            onChange={(e) => {
              onChange(personalData, e, setPersonalData, personalItem.section);
            }}
          />

          <label htmlFor="personal-location">Location</label>
          <input
            type="text"
            id="personal-location"
            value={personalItem.location}
            name="location"
            onChange={(e) => {
              onChange(personalData, e, setPersonalData, personalItem.section);
            }}
          />
        </div>
      </fieldset>
    </form>
  );
}
