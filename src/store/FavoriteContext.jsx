import { createContext } from "react";
import PropTypes from "prop-types";

FavoriteContextProvider.propTypes = {
  children: PropTypes.node,
};

const FavoriteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addMeetup: () => {},
  removeMeetup: () => {},
  itemIsFavorite: () => {},
});

export function FavoriteContextProvider(props) {
  // const [favorites, setFavorites] = useState([]);
  const dataJson = localStorage.getItem("favorites");
  const dataExist = JSON.parse(dataJson) || [];

  function addMeetupHandler(meetup) {
    dataExist.push(meetup);
    localStorage.setItem("favorites", JSON.stringify(dataExist));
    // setFavorites((prev) => {
    //   return prev.concat(meetup);
    // });
  }
  function removeMeetupHandler(meetupId) {
    const newData = dataExist.filter((favorite) => favorite.id != meetupId);
    localStorage.setItem("favorites", JSON.stringify(newData));
    // setFavorites((prev) => {
    //   return prev.filter((meetup) => meetup.id !== meetupId);
    // });
  }
  function itemIsFavoriteHandler(meetupId) {
    return dataExist.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: dataExist,
    totalFavorites: dataExist.length,
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
