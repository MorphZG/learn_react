import PropTypes from "prop-types";

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.string,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

function UserGreeting(props) {
  if (props.isLoggedIn) {
    return <h2 className="welcome-message">Welcome {props.username}</h2>;
  } else {
    return <h2 className="login-prompt">Please log in to continue</h2>;
  }
}

export default UserGreeting;
