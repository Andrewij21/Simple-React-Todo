import PropTypes from "prop-types";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

Layout.propTypes = {
  children: PropTypes.node,
};

function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
}

export default Layout;
