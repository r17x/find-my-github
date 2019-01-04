import React from "react";
import axios from "axios";

const { Consumer, Provider } = React.createContext();

class RepositoryContext extends React.Component {
  constructor() {
    super();

    this.state = {
      repos: [],
      notFound: false
    };
  }

  onFetchRepo = async username => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      const repos = await res.data;
      if (repos.length) {
        this.setState({ repos, notFound: false });
      } else {
        this.setState({ notFound: true });
      }
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
          repos: this.state.repos,
          repoNotFound: this.state.notFound,
          onFetchRepo: this.onFetchRepo
        }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as RepositoryConsumer, RepositoryContext };
