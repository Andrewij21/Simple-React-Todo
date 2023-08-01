import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoriteContext from "../store/FavoriteContext";
import PropTypes from "prop-types";

Favorites.propTypes = {
  favoritectx: PropTypes.object,
};

function Favorites() {
  const favoritectx = useContext(FavoriteContext);
  let content;
  if (favoritectx.totalFavorites === 0)
    content = <p>You have no favorites, start adding one?</p>;
  else content = <MeetupList meetups={favoritectx.favorites} />;

  return (
    <section>
      <h1>Favorites Meetups</h1>
      {content}
    </section>
  );
}

export default Favorites;
