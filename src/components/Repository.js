import React from "react";
import { RepositoryConsumer } from "../contexts/RepositoryContext";

const Repository = () => {
  return (
    <RepositoryConsumer>
      {({ repos, repoNotFound }) => {
        if (repoNotFound) {
          return <h1>Repo Not Found</h1>;
        } else {
          if (repos.length) {
            return repos.map(repo => (
              <React.Fragment key={repo.id}>
                <a href={repo.html_url}>
                  <p>{repo.name}</p>
                </a>
                <p>&#9733; {repo.stargazers_count}</p>
                <hr />
              </React.Fragment>
            ));
          }
        }
      }}
    </RepositoryConsumer>
  );
};

export default Repository;
