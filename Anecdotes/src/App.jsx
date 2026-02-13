import { useState } from "react";

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}> {text} </button>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "Click on Most voted to display the Chosen one",
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(1);
  const Random = () =>
    setSelected(Math.floor(Math.random() * (anecdotes.length - 1)) + 1);
  const emptyVotes = new Array(anecdotes.length).fill(0);
  const [votes, setVote] = useState(emptyVotes);
  const voting = (selected) => {
    const copy = [...votes];
    copy[selected] += 1;
    setVote(copy);
  };
  const [winner, setWinner] = useState(0);

  const mostVoted = () => {
    let max = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[max]) {
        max = i;
      }
    }
    setWinner(max);
  };

  return (
    <>
      <h1> Ram === Random Anecodotes Machine </h1>
      <div>{anecdotes[selected]}</div>
      <br />
      <div>Current votes: {votes[selected]}</div>

      <br />
      <Button onClick={Random} text={"Random Anecdote"} />
      <Button onClick={() => voting(selected)} text={"Vote"} />
      <Button onClick={mostVoted} text={"Most Voted"} />
      <br />
      <br />

      <div>
        {" "}
        Most voted Andecodote: <br /> <br /> {anecdotes[winner]}
      </div>
    </>
  );
};

export default App;
