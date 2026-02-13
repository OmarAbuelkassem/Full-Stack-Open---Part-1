import { useState } from "react";

const Display = ({ text, number }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{number}</td>
      </tr>
    </>
  );
};
const Print = () => {
  return (
    <>
      <p>{console.log("print print print")}</p>
    </>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}> {text} </button>
    </>
  );
};

const Statistics = ({ stats }) => {
  if (stats.every((stat) => stat.number === 0)) {
    return (
      <>
        <h2> No feedback given yet</h2>
      </>
    );
  }
  return (
    <>
      <h2> Feedback</h2>
      <table>
        <tbody>
          {stats.map((stat) => (
            <Display key={stat.text} text={stat.text} number={stat.number} />
          ))}
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;
  const stats = [
    { text: "good", number: good },
    { text: "neutral", number: neutral },
    { text: "bad", number: bad },
    { text: "total", number: total },
    { text: "average feedback", number: average },
    { text: "positive feedback percentage", number: positive },
  ];

  const plus = () => {
    setGood(good + 1);
  };
  const meh = () => {
    setNeutral(neutral + 1);
  };
  const minus = () => {
    setBad(bad + 1);
  };

  return (
    <>
      <h1>Give us your feedback</h1>
      <Button onClick={plus} text={"good"} />
      <Button onClick={meh} text={"neutral"} />
      <Button onClick={minus} text={"bad"} />
      <Statistics stats={stats} />
    </>
  );
};

export default App;
