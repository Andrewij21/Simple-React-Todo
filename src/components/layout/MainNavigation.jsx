import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/FavoriteContext";
import { useContext } from "react";

function MainNavigation() {
  const favoritectx = useContext(FavoriteContext);
  return (
    <header>
      <nav className={classes.header}>
        <h1 className={classes.logo}>My React Todo</h1>
        <ul>
          <li>
            <Link to={"/"}>All meetups</Link>
          </li>
          <li>
            <Link to={"/favorites"}>
              Favorites
              <span className={classes.badge}>
                {favoritectx.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
