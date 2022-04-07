import React, { useState } from "react";
import Radio from "./components/Forms/Radio";

const questions = [
  {
    question: "Which method is used for components?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    answer: "React.createElement()",
    id: "p1",
  },
  {
    question: "How to import an external component?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    answer: 'import Component from "./Component"',
    id: "p2",
  },
  {
    question: "What hook is not native?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    answer: "useFetch()",
    id: "p3",
  },
  {
    question: "What word should be used to create a hook?",
    options: ["set", "get", "use"],
    answer: "use",
    id: "p4",
  },
];
const App = () => {
  const [answers, setAnswers] = useState({ p1: "", p2: "", p3: "", p4: "" });
  const [slide, setSlide] = useState(0);
  function handleChange(event) {
    setAnswers({ ...answers, [event.target.id]: event.target.value });
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {questions.map((question) => {
        return (
          <fieldset
            key={question.id}
            style={{
              padding: "2rem",
              border: "2px solid #eee",
              marginBottom: "1rem",
            }}
          >
            <legend style={{ fontWeight: "bold" }}>{question.question}</legend>
            {question.options.map((option, index) => {
              return (
                <div key={option}>
                  <Radio
                    active={slide === index}
                    id={question.id}
                    type="radio"
                    option={option}
                    value={answers[question.id]}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
              );
            })}
          </fieldset>
        );
      })}
      <button>Next</button>
    </form>
  );
};

export default App;
