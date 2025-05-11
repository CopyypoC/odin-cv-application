export function ExperienceList({
  experienceData,
  toggleActive,
  onAddItem,
  onDeleteItem,
  onSelectId,
}) {
  const experienceItems = experienceData.map((item) => {
    return (
      <li key={item.id} data-uuid={item.id} className="list-item">
        <button
          type="button"
          className="item-name"
          data-toggle-true
          onClick={(e) => {
            toggleActive(e);
            onSelectId(e, "experience");
          }}
        >
          {item.company}
        </button>
        <button
          type="button"
          className="item-delete"
          data-toggle-false
          onClick={(e) => {
            onDeleteItem(experienceData, e, toggleActive, "experience");
          }}
        >
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
      <button
        type="button"
        className="list-add"
        data-toggle-true
        onClick={(e) =>
          onAddItem(experienceData, e, toggleActive, "experience")
        }
      >
        Add
      </button>
    </ul>
  );
}
