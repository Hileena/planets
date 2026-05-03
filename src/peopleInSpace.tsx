import { useEffect, useState } from "react";

export default function PeopleInSpace() {
  const [people, setPeople] = useState<{ name: string; craft: string }[]>([]);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => setPeople(data.people));
  }, []);

  // TODO: add loading state and error handling
  return (
    <div>
      <h1>People in Space</h1>
      <ul>
        {people.map((person) => (
          <li key={person.name}>
            {person.name} is on the {person.craft}
          </li>
        ))}
      </ul>
    </div>
  );
}
