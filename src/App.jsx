import { useState } from "react";
import First from "./components/First";
import Sec from "./components/Sec";
function App() {
  const [showFirst, setShowFirst] = useState(true);
  return (
    <div>
      {showFirst ? <First setShowFirst={setShowFirst} /> : <Sec />}
    </div>
  );    
}
export default App;