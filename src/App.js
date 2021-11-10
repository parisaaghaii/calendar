import React , {useState} from "react";
import Calender from "./calender/Calender"
import moment from "moment";

function App() {
  const [value, setValue] = useState(() => moment());
  
  return (
    <div>
      <Calender value={value} onChange={setValue} />
    </div>
  );
}

export default App;
