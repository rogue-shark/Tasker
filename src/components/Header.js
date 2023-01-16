import PropTypes from "prop-types"; // "impt"
import Button from "./Button";

//using react snippet extension  - typing "rafce"
// i.e. destr 'title' from 'defaultProps' obj
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//to make our code more robust
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

/*
//Inline styling:
const headingStyle = {
    color: 'red',
    backgroundColor: 'Black'
}
//then pass it through <header style={headingStyle} >
*/

export default Header;
