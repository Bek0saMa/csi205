import { useState } from "react";
import "../App.css";
import Adder from "../components/Adder";
import RadixCounter from "../components/RadixCounter";
import Value from "../components/Value";
import Timer from "../components/Timer";
import Temperatures from "../components/Temperatures";

const Components = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h3 className="text-center">Components Page</h3>

      {/* <RadixCounter /> */}

      <Value name={"COUNTER"} value={counter} setValue={setCounter} />

      <Adder initA={0} initB={0} />

      <Timer />

      <Temperatures />
    </>
  );
};

export default Components;
