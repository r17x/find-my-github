import React from "react";
import axios from "axios";

const { Consumer, Provider } = React.createContext();

class UserContext extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {},
      notFound: false
    };
  }

  onFetchUser = async username => {
    try {
      const res = await axios.get(`https://api.github.com/users/${username}`);
      const user = await res.data;
      this.setState({ user, notFound: false });
    } catch (error) {
      if (error.response.status === 404) {
        this.setState({ notFound: true });
      }
    }
  };

  render() {
    return (
      <Provider
        value={{
          user: this.state.user,
          userNotFound: this.state.notFound,
          onFetchUser: this.onFetchUser
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as UserConsumer, UserContext };
