import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Karakterler from "./components/Karakterler";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        const searchResults = res.data.filter((item) => {
          return (
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.hair_color.toLowerCase().includes(search.toLowerCase())
          );
        });
        setCharacters(searchResults);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  return (
    <div className="App">
      <Header search={search} changeHandler={changeHandler} />
      <Karakterler characters={characters} />
    </div>
  );
};

export default App;
