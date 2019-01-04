import React from "react";
import { UserConsumer } from "../contexts/UserContext";

const User = () => (
  <UserConsumer>
    {({ user, userNotFound }) => {
      if (userNotFound) {
        return <h1>User Not Found</h1>;
      } else {
        if (Object.keys(user).length) {
          return (
            <React.Fragment>
              <img
                src={user.avatar_url}
                alt="avatar"
                width="150px"
                height="150px"
                style={styles.avatar}
              />
              <h4 style={styles.name}>{user.name}</h4>
              <p>@{user.login}</p>
            </React.Fragment>
          );
        }
      }
    }}
  </UserConsumer>
);

const styles = {
  avatar: {
    borderRadius: "100%"
  },
  name: {
    fontWeight: "bold",
    marginTop: "15px"
  }
};

export default User;
