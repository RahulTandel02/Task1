import React from "react";
import Radio from "./Radio";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

const ProblemForm = ({ index }) => {
  const { data, setData } = useContext(FormContext);
  const a = [
    "Not Relevant",
    "When lying down",
    "When sitting",
    "Under standing",
    "In walking",
  ];
  return (
    <div>
      <form>
        <Radio
          label={"Have you been ever diagnosed with this problem?"}
          radioArray={["Not Relevant", "Yes", "No"]}
          name="history"
          index={index}
        />
        <Radio
          label={"Did the problem start after a physical trauma?"}
          radioArray={["Not Relevant", "Yes", "No"]}
          name="physical"
          index={index}
        />
        <Radio
          label={"Did the problem start after a mental trauma?"}
          radioArray={["Not Relevant", "Yes", "No"]}
          name="mental"
          index={index}
        />
        <Radio
          label={"How often do you expirience the problem"}
          radioArray={[
            "Not Relevant",
            "Daily",
            "Several times/week",
            "A few times/month",
            "A few times/year",
          ]}
          name="frequency"
          index={index}
        />
        <label className="radioTxt">When do you expirence problem</label>
        {a.map((item, i) => (
          <div key={i}>
            <input
              type={"checkbox"}
              id="not"
              name="not"
              checked={data[index]["when"].includes(item)}
              onChange={() =>
                setData([
                  ...data.slice(0, index),
                  { ...data[index], when: [...data[index].when, item] },
                  ...data.slice(index + 1),
                ])
              }
            />
            <label htmlFor="not" className="radioTxt">
              {item}
            </label>
          </div>
        ))}
        <Radio
          label={
            "How intense is the expirence of the problem on average on a scale 0-10?"
          }
          radioArray={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          name="scale"
          index={index}
        />
      </form>
      <br />
    </div>
  );
};

export default ProblemForm;
