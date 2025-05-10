export function EducationList({ educationData }) {
  const educationItems = educationData.map((item) => {
    return (
      <li key={item.id} className="list-item">
        <p>{item.school}</p>
        <button type="button">Delete</button>
      </li>
    );
  });

  return (
    <ul className="edu-list">
      <p>Education List</p>
      {educationItems}
      <button type="button">Add</button>
    </ul>
  );
}
