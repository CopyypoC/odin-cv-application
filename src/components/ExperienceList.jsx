export function ExperienceList({ experienceData }) {
  const experienceItems = experienceData.map((item) => {
    return <li key={item.id}>{item.company}</li>;
  });

  return (
    <ul>
      {experienceItems}
      <button type="button">Add</button>
    </ul>
  );
}
