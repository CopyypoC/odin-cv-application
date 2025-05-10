export function EducationList({ educationData, toggleActive }) {
  const educationItems = educationData.map((item) => {
    return (
      <li key={item.id} className="list-item">
        <button type="button" className="item-name" data-toggle-true>
          {item.school}
        </button>
        <button type="button" className="item-delete" data-toggle-false>
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
        onClick={toggleActive}
      >
        Add
      </button>
    </ul>
  );
}
