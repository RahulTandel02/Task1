import React from "react";

const Summary = ({ data }) => {
  const question = [
    "Have you been ever diagnosed with this problem?",
    "Did the problem start after a physical trauma?",
    "Did the problem start after a mental trauma?",
    "How often do you expirience the problem",
    "When do you expirence problem",
    "How intense is the expirence of the problem on average on a scale 0-10?",
  ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>

        {/* {data.map((item) => Object.keys(item).map((i) => <tr>{item[i]}</tr>))} */}
        {data.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{`Problem ${index + 1}`}</td>
            </tr>
            {Object.keys(item).map((i, k) => (
              <tr key={k}>
                <td>{question[k]}</td>
                <td>{item[i]}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Summary;
