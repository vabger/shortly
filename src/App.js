import React, { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner";
import Converter from "./Components/Converter";
import URLComponentGroup from "./Components/URLComponentGroup";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
function App() {
  let [urlState, setUrlState] = useState([]);
  const setCallback = (data) => {
    data.short
      .then((s) => {
        setUrlState([
          {
            url: data.url,
            short: s,
            copied: false,
          },
          ...urlState,
        ]);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="bottomHalf">
        <Converter url="" isError={false} parentCallback={setCallback} />
        <URLComponentGroup urlState={urlState} />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default App;
