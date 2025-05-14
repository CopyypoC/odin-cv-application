import { FaArrowDown, FaSchool } from "react-icons/fa";

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
    <ul className="edu-list section-list">
      <button type="button" className="list-title">
        <FaSchool className="list-icon" size={24} />
        <h3>Education List</h3>
        <FaArrowDown className="list-icon" size={24} />
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
