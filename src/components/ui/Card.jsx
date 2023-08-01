import PropType from "prop-types";
import classes from "./Card.module.css";

Card.propTypes = {
  children: PropType.node,
};

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
