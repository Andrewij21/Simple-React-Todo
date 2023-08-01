import PropTypes from "prop-types";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

MeetupItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  description: PropTypes.string,
};

function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div>
          <img className={classes.image} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>To Favorite</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
