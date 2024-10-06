import React, { useContext, useEffect, useState } from "react";
import IncreaseAge from "./IncreaseAge";


const Home = () => {
  const [state, setState] = useState(["Vanshika"]);

    const [name, setName] = useState();
    // const [] 
    const firstName = state?.[0];
  useEffect(() => {

    const t = setInterval(() => {
      setName("vikas");
      console.log("run useEffect");
      // consol
    }, 2000);
    return () => {
      clearInterval(t)
    }
  }, [firstName, name]);

  // !important note the new state must return prev state
  const click = () => {
    setState(["Vanshika"]);
    console.log("state1=>", state);
    // setState(prevState => [...prevState, "React"]); // state =["Vanshika"]
    // console.log("state2=>", state);
    // setState(prevState => [...prevState, "Next"]); // state =["Vanshika"]
    // console.log("state3=>", state);
  }
//   console.log(state);

//   console.log("user=>", user);
  return <div style={{ color: 'black'}}>
    <button onClick={click}>Add REact</button>
    <p>{JSON.stringify(state)}</p>
    <input type="text" onChange={(e) =>setName(e.target.value)} placeholder="name" />
    <IncreaseAge />
  </div>;
};

export default Home;
