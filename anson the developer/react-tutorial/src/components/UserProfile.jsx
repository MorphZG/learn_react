function UserProfile() {
  return (
    <div id="user-profile">
      <h1>Profile</h1>
      <div className="email">
        <span>Email: </span>
        <span>email@email.com </span>
      </div>
      <section>
        <span>Favorite foods: </span>
        <br />
        <ul>
          <li>sushi</li>
          <li>pizza</li>
          <li>mediterranean food</li>
        </ul>
      </section>
    </div>
  );
}

export { UserProfile };
