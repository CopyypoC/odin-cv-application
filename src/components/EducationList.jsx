export function EducationList({ educationData }) {
  const educationItems = educationData.map((item) => {
    return (
      <li key={item.id} className="list-item">
        <button type="button" className="item-name">
          {item.school}
        </button>
        <button type="button" className="item-delete">
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
      <button type="button" className="list-add">
        Add
      </button>
    </ul>
  );
}
