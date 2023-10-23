import React, { useState } from 'react';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';

const questionsAndAnswers = [
  {
    question: "Question 1: How do I get started with this project?",
    answer: "Answer 1: To get started with this project, you can follow the installation instructions in the project's README file."
  },
  {
    question: "Question 2: What technologies are used in this project?",
    answer: "Answer 2: This project uses React for the front end and Node.js for the back end. It also utilizes various libraries and tools for specific functionalities."
  },
  {
    question: "Question 3: How can I contribute to this project?",
    answer: "Answer 3: You can contribute to this project by forking the repository on GitHub, making your changes, and then creating a pull request. Be sure to follow the project's contribution guidelines."
  },
  {
    question: "Question 4: Are there any coding conventions I should follow?",
    answer: "Answer 4: Yes, please follow the project's coding conventions and style guidelines as outlined in the project's documentation."
  },
  {
    question: "Question 5: How can I report a bug or issue?",
    answer: "Answer 5: To report a bug or issue, please create a new GitHub issue on the project's repository and provide detailed information about the problem you've encountered."
  },
];

const Accordion = () => {
  const [activeKey, setActiveKey] = useState([]);

  const handlePanelChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-3/4 p-8 bg-white rounded-lg shadow-card">
        <Collapse
          accordion={true}
          className="w-full"
          openMotion={{
            onAppear: (key) => 'rc-collapse-active',
            onEnter: (key) => 'rc-collapse-active',
            onLeave: (key) => '',
          }}
          activeKey={activeKey}
          onChange={handlePanelChange}
        >
          {questionsAndAnswers.map((qa, index) => (
            <Panel
              key={index}
              header={qa.question}
              className={`bg-white transition-colors ${
                activeKey.includes(index)
                  ? 'bg-pri-80 text-white'
                  : 'hover:bg-pri-80 hover:text-white'
              }`}
            >
              {qa.answer}
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  );
};

export default Accordion;
