import { FaArrowDown, FaBriefcase } from "react-icons/fa";
import { useState } from "react";

export function ExperienceList({
  experienceData,
  toggleActive,
  onAddItem,
  onDeleteItem,
  onSelectId,
}) {
  const [isDropDown, setDropDown] = useState(true);

  const toggleDropDown = () => {
    setDropDown(!isDropDown);
  };

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
    <ul className="exp-list section-list">
      <button type="button" className="list-title" onClick={toggleDropDown}>
        <FaBriefcase className="list-icon" size={24} />
        <h3>Experience List</h3>
        <FaArrowDown
          className={"list-icon " + (isDropDown ? "point-up" : "")}
          size={24}
        />
      </button>
      <div className={"dropdown-grid " + (isDropDown ? "dropdown " : "")}>
        <div className="list-items-container">
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
        </div>
      </div>
    </ul>
  );
}
