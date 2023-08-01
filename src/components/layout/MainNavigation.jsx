import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header>
      <nav className={classes.header}>
        <h1 className={classes.logo}>My React Todo</h1>
        <ul>
          <li>
            <Link to={"/"}>All meetups</Link>
          </li>
          <li>
            <Link to={"/favorites"}>Favorites</Link>
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
