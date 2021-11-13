import React , {useState} from "react";
import Calender from "./calender/Calender"
import moment from "moment";
import Button from "./calender/Button"
import JCalendar from "reactjs-persian-calendar";

function App() {
  const [value, setValue] = useState(() => moment());
  
  return (
    <div>
      <Calender value={value} onChange={setValue} />
      <div style={{ display: "flex" }}>
        <JCalendar
          locale={"fa"}
          color={"#D73333"}
          size={40}
          onClick={console.log}
          itemRender={(key, item, children) => {
            console.log(key, item);
            if (
              key === "w0_d7" ||
              key === "w1_d7" ||
              key === "w2_d7" ||
              key === "w3_d7" ||
              key === "w4_d7"
            ) {
              return <span style={{ color: "red" }}>{children}</span>;
            }
            return <span >{children}</span>;
          }}
        />
      </div>
      <Button />
    </div>
  );
}

export default App;
