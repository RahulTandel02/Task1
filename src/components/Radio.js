import React from "react";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const Radio = ({ label, radioArray, name, index }) => {
  const { data, setData } = useContext(FormContext);
  return (
    <div className="radio">
      <label className="radioTxt">{label}</label>
      {radioArray.map((item, i) => (
        <div key={i}>
          <input
            checked={data[index][name] === item}
            type={"radio"}
            name={name}
            value={name}
            onChange={() =>
              setData([
                ...data.slice(0, index),
                { ...data[index], [name]: item },
                ...data.slice(index + 1),
              ])
            }
          />
          <label className="radioTxt" htmlFor="relevant">
            {item}
          </label>
        </div>
      ))}
      {/* <input type={"radio"} id="yes" name="history" value={"yes"} />
      <label for="yes">Yes</label>
      <input type={"radio"} id="no" name="history" value={"no"} />
      <label for="no">No</label>o */}
    </div>
  );
};

export default Radio;
