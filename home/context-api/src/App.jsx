import React, { createContext } from "react";
import ComA from "./components/ComA";

const FirstName = createContext();
const LastName = createContext();
const App = () => {
  return (
    <div>
      <FirstName.Provider value={"vishal"}>
        <LastName.Provider value={"makwana"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default App;
export { FirstName, LastName };
