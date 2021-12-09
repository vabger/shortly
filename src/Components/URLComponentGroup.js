import React, { useState, useEffect } from "react";
import URLComponent from "./URLComponent";
function URLComponentGroup({ urlState }) {
  let [localState, setlocalState] = useState(urlState);
  useEffect(() => {
    setlocalState(urlState);
  }, [urlState]);
  const callbackFunc = (id) => {
    setlocalState(
      localState.map((obj, index) => {
        console.log(index);
        if (index === id) {
          return {
            url: obj.url,
            short: obj.short,
            copied: true,
          };
        }
        return { ...obj, copied: false };
      })
    );
  };
  return (
    <div>
      {localState.map((obj, index) => (
        <URLComponent
          id={index}
          key={index}
          urlObj={obj}
          callback={callbackFunc}
        />
      ))}
    </div>
  );
}

export default URLComponentGroup;
