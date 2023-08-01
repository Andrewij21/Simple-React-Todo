import PropTypes from "prop-types";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

MeetupList.propTypes = {
  meetups: PropTypes.array,
};

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
