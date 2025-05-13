import "./ConceptHeader.css";

const ConceptHeader = (props) => {
  const { headerImage } = props;
  return (
    <header>
      <img src={headerImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
};

export default ConceptHeader;
