import ConceptItem from "./ConceptItem";
import "./Concepts.css";

const Concepts = (props) => {
  const conceptItems = props.concepts.map((concept, index) => (
    <ConceptItem key={index} items={concept} />
  ));

  return <ul id="concepts">{conceptItems}</ul>;
};

export default Concepts;
