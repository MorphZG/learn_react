import PropTypes from "prop-types";

const styles = {
  color: "black",
  border: "solid 2px black",
  padding: "0px 0px 0px 10px",
  display: "",
};

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Guest",
  age: 0,
  isStudent: false,
};

function Student(props) {
  return (
    <div style={styles}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Pravi" : "Laznjak"}</p>
    </div>
  );
}

export default Student;
