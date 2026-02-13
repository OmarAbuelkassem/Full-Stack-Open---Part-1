const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

const Part = ({ n, e }) => {
  return (
    <>
      <p>
        {n} {e}
      </p>
    </>
  );
};
const Content = ({ parts }) => {
  return (
    <>
      <Part n={parts[0].name} e={parts[0].exercises} />
      <Part n={parts[1].name} e={parts[1].exercises} />
      <Part n={parts[2].name} e={parts[2].exercises} />
    </>
  );
};

const Total = ({ total }) => {
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 12,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  const total =
    course.parts[0].exercises +
    course.parts[1].exercises +
    course.parts[2].exercises;

  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  );
};

export default App;
