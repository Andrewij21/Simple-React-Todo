import { useRef } from "react";
import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import PropType from "prop-types";

NewMeetupForm.propTypes = {
  onAddMeetup: PropType.func,
};

function NewMeetupForm(props) {
  const title = useRef();
  const image = useRef();
  const address = useRef();
  const description = useRef();

  function submitHandler(e) {
    e.preventDefault();
    const meetup = {
      title: title.current.value,
      image: image.current.value,
      address: address.current.value,
      description: description.current.value,
    };
    // console.log(meetup);
    props.onAddMeetup(meetup);
  }

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            required
            ref={title}
            placeholder="add title"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            id="image"
            required
            ref={image}
            placeholder="add image url"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            required
            ref={address}
            placeholder="add address"
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            rows={4}
            type="text"
            id="description"
            required
            ref={description}
            placeholder="add description"
          />
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
