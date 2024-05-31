import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://placehold.co/150x200"
        alt="profile picture"
      ></img>
      <h2 className="card-title">
        {props.fname} {props.lname}
      </h2>
      <p className="card-text">{props.cardText}</p>
    </div>
  );
}
Card.propTypes = {
  fname: PropTypes.string,
  lname: PropTypes.string,
  cardText: PropTypes.string,
};
Card.defaultProps = {
  fname: "Guest",
  lname: "Guest",
  cardText: "Lorem Ipsum",
};

export default Card;
