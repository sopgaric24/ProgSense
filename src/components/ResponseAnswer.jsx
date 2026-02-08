const ResponseAnswer = ({ question, answer, classname }) => {
  return (
    <div className="answer">
      <h3>{question}</h3>
      <div className="answer-container">
        <p className={classname}>{answer}</p>
      </div>
    </div>
  );
};

export default ResponseAnswer;
