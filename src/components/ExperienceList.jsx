export function ExperienceList({ experienceData }) {
  const experienceItems = experienceData.map((item) => {
    return (
      <li key={item.id} className="list-item">
        <p>{item.company}</p>
        <button type="button">Delete</button>
      </li>
    );
  });

  return (
    <ul className="exp-list">
      <p>Experience List</p>
      {experienceItems}
      <button type="button">Add</button>
    </ul>
  );
}
