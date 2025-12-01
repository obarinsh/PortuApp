import React from "react";
import { useState } from "react";
// import "../css/translator.css";

function Translator() {
  const [wordPtToEn, setWordPtToEn] = useState("");
  const [wordEngtoPt, setWordEngtoPt] = useState("");
  const [resultPtToEn, setResultPtToEn] = useState("");
  const [resultEngToPt, setResultEngToPt] = useState("");

  const handleTranslatePt = async () => {
    try {
      if (!wordPtToEn.trim()) {
        setResultPtToEn("Please enter a Portuguese word");
        return;
      }
      const url = `https://api.mymemory.translated.net/get?q=${wordPtToEn}&langpair=pt|en`;
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      console.log("API Response:", data);
      if (data.responseData && data.responseData.translatedText) {
        setResultPtToEn(data.responseData.translatedText);
      } else {
        setResultPtToEn("Translation not found");
      }
    } catch (error) {
      console.error("Error translating word:", error);
      setResultPtToEn("Error translating word");
    }
  };

  const handleTranslateEng = async () => {
    try {
      if (!wordEngtoPt.trim()) {
        setResultEngToPt("Please enter a English word");
        return;
      }
      const url = `https://api.mymemory.translated.net/get?q=${wordEngtoPt}&langpair=en|pt`;
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.json();
      console.log("API Response:", data);
      if (data.responseData && data.responseData.translatedText) {
        setResultEngToPt(data.responseData.translatedText);
      } else {
        setResultEngToPt("Translation not found");
      }
    } catch (error) {
      console.error("Error translating word:", error);
      setResultEngToPt("Error translating word");
    }
  };

  return (
    <div>
      <h1>Translator</h1>
      <div>
        <input
          type="text"
          value={wordPtToEn}
          onChange={(e) => setWordPtToEn(e.target.value)}
          placeholder="Enter a Portuguese word"
        />
        <button onClick={handleTranslatePt}>Translate</button>
        <p>{resultPtToEn}</p>
      </div>
      <div>
        <input
          type="text"
          value={wordEngtoPt}
          onChange={(e) => setWordEngtoPt(e.target.value)}
          placeholder="Enter a English word"
        />
        <button onClick={handleTranslateEng}>Translate</button>
        <p>{resultEngToPt}</p>
      </div>
    </div>
  );
}

export default Translator;
