import { useState } from "react";
import Game from "./Game";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Game></Game>
      {/* <div style={{ backgroundColor: "black" }}>asdfdas</div> */}
    </>
  );
}

export default App;
