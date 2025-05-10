export function EducationList({ educationData }) {
  const educationItems = educationData.map((item) => {
    return <li key={item.id}>{item.school}</li>;
  });

  return <ul>{educationItems}</ul>;
}
