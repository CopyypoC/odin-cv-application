export function ExperienceList({ experienceData }) {
  const experienceItems = experienceData.map((item) => {
    return (
      <li key={item.id} className="list-item">
        <button type="button" className="item-name">
          {item.company}
        </button>
        <button type="button" className="item-delete">
          Delete
        </button>
      </li>
    );
  });

  return (
    <ul className="exp-list">
      <button type="button" className="list-title">
        Experience List
      </button>
      {experienceItems}
      <button type="button" className="list-add">
        Add
      </button>
    </ul>
  );
}
