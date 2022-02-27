import React, { useState, useEffect } from "react";
import { getMeaning } from "./services/dictionary-service";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [wordMeaning, setWordMeaning] = useState("");
  const [erroMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setWordMeaning("");
      setErrorMsg("");
      const { word } = e.target.elements;
      console.log(word);
      const response = await getMeaning({ word: word.value });
      debugger;
      setWordMeaning(response.data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      if (error.message.incluedes("404")) {
        setErrorMsg("Word not found :( try another search");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="App">
      <h1>Free Dictionary</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="word">Word {` `}</label>
        <input type="text" id="word" />
        <button disabled={isLoading}>Consult</button>
      </form>

      {isLoading && <p>Loading...</p>}

      {!isLoading && wordMeaning && <p>{wordMeaning}</p>}

      {!isLoading && !wordMeaning && !erroMsg && <p>Type a word and click</p>}

      {!isLoading && erroMsg && <p>{erroMsg}</p>}
    </div>
  );
};

export default App;
