import { createContext, useState } from "react";
import PropTypes from "prop-types";

FovoriteContextProvider.propTypes = {
  children: PropTypes.node,
};

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addMeetup: () => {},
  removeMeetup: () => {},
  itemIsFavorite: () => {},
});

export function FovoriteContextProvider(props) {
  const [favorites, setFavorites] = useState([]);

  function addMeetupHandler(meetup) {
    setFavorites((prev) => {
      return prev.concat(meetup);
    });
  }
  function removeMeetupHandler(meetupId) {
    setFavorites((prev) => {
      return prev.filter((meetup) => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return favorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addMeetup: addMeetupHandler,
    removeMeetup: removeMeetupHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoriteContext.Provider value={context}>
      {props.children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;
