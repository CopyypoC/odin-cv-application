export function PersonalSection({ personalItem }) {
  return (
    <header>
      <h2>{personalItem.name}</h2>
      <div className="personal-bottom">
        <p>{personalItem.email}</p>
        <p>{personalItem.phone}</p>
        <p>{personalItem.location}</p>
      </div>
    </header>
  );
}
