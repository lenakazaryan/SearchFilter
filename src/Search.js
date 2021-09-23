import React from "react";
import { useState, useEffect } from "react";
import "./Search.css";

const people = [
  {
    id: 1,
    name: "Overhold",
    image:
      "https://robohash.org/odioveritatisnumquam.png?size=150x149&set=set1",
  },
  {
    id: 2,
    name: "Ventosanzap",
    image: "https://robohash.org/cumqueethic.png?size=150x149&set=set1",
  },
  {
    id: 3,
    name: "Rank",
    image:
      "https://robohash.org/solutasuntdoloremque.png?size=150x149&set=set1",
  },

  {
    id: 4,
    name: "Greenlam",
    image:
      "https://robohash.org/etvoluptasaccusantium.png?size=150x149&set=set1",
  },

  {
    id: 5,
    name: "Stim",
    image: "https://robohash.org/placeatenimiste.png?size=150x149&set=set1",
  },

  {
    id: 6,
    name: "Otcom",
    image:
      "https://robohash.org/assumendaquodmolestiae.png?size=150x149&set=set1",
  },
];

const Search = () => {
  const [state, setState] = useState("");
  const [search, setSearch] = useState([]);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    const results = people.filter((person) =>
      person.name.toLowerCase().includes(state.toLowerCase())
    );
    setSearch(results);
  }, [state]);

  return (
    <div className="App">
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={state}
        onChange={handleChange}
      />
      <div className="container">
        {search.map((item) => (
          <div key={item.id} className="people">
            <p>Name {item.name}</p>
            <img src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
