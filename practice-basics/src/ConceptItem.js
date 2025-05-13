import "./ConceptItem.css";

const ConceptItem = (props) => {
  const { title, description, image } = props.items;
  return (
    <li className="concept">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>TODO: {description}</p>
    </li>
  );
};

export default ConceptItem;
