export function EducationList({
  educationData,
  toggleActive,
  onAddItem,
  onSelectId,
  onDeleteItem,
}) {
  const educationItems = educationData.map((item) => {
    return (
      <li key={item.id} data-uuid={item.id} className="list-item">
        <button
          type="button"
          className="item-name"
          data-toggle-true
          onClick={(e) => {
            toggleActive(e);
            onSelectId(e, "education");
          }}
        >
          {item.school}
        </button>
        <button
          type="button"
          className="item-delete"
          data-toggle-false
          onClick={(e) => {
            onDeleteItem(educationData, e, toggleActive, "education");
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <ul className="edu-list">
      <button type="button" className="list-title">
        Education List
      </button>
      {educationItems}
      <button
        type="button"
        className="list-add"
        data-toggle-true
        onClick={(e) => onAddItem(educationData, e, toggleActive, "education")}
      >
        Add
      </button>
    </ul>
  );
}
