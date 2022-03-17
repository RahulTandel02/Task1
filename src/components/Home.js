import React, { useState } from "react";
import ProblemForm from "./ProblemForm";
import { FormContext } from "../context/FormContext";
import Summary from "./Summary";

const Home = () => {
  const [data, setData] = useState([
    {
      history: "",
      physical: "",
      mental: "",
      frequency: "",
      when: "",
      scale: "",
    },
  ]);
  const [appPage, setAppPage] = useState("Form");

  const handleClick = () => {
    if (appPage === "Form") {
      setAppPage("Summary");
    } else {
      setAppPage("Form");
    }
  };

  const handleAdd = () => {
    setData([
      ...data,
      {
        history: "",
        physical: "",
        mental: "",
        frequency: "",
        when: "",
        scale: "",
      },
    ]);
  };

  return (
    <div>
      <FormContext.Provider value={{ data, setData }}>
        {appPage === "Form" ? (
          data.map((item, index) => <ProblemForm index={index} key={index} />)
        ) : (
          <Summary data={data} />
        )}

        <div className="plusBtn">
          <button onClick={handleAdd} className="plusBtn">
            +
          </button>
        </div>
        <button onClick={handleClick} className="dBtn">
          {appPage === "Form" ? "Next" : "Prev"}
        </button>
      </FormContext.Provider>
    </div>
  );
};

export default Home;
