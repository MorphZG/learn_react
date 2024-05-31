import Student from "./components/Student";
import Card from "./components/Card";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={false} username="Zoran" />
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Card fname="Zoran" lname="Topic" cardText="Full stack developer" />
    </>
  );
}

export default App;
