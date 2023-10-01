import { useState, useEffect } from "react";
import { NavBar } from "./Components/Navbar";
import { SearchBar } from "./Components/SearchBar";
import { CharacterList } from "./Components/CharacterList";
import axios from "./Components/api";
import { Spinner } from "./Components/Spinner";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(`/characters?name=${query}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "http://localhost",
        },
      });

      // setItems(results.data);
      setLoading(false);
      console.log({ results });
    };
    fetchItems();
  }, [query]);
  return (
    <div className="app">
      <NavBar />
      <SearchBar setQuery={(query) => setQuery(query)} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
};

export default App;
