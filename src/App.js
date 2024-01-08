import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [char, setChar] = useState([]);
  const [search, setSearch] = useState("");

  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        setChar(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
};

export default App;
