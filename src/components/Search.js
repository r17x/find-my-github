import React from "react";
import { Input, Row, Col, Button } from "reactstrap";

import { UserConsumer } from "../contexts/UserContext";
import { RepositoryConsumer } from "../contexts/RepositoryContext";

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      username: ""
    };
  }

  render() {
    return (
      <UserConsumer>
        {({ onFetchUser }) => (
          <RepositoryConsumer>
            {({ onFetchRepo }) => (
              <Row>
                <Col lg={10} xs={9}>
                  <Input
                    placeholder="Input your username"
                    onKeyUp={e => this.setState({ username: e.target.value })}
                  />
                </Col>
                <Col lg={2} xs={3}>
                  <Button
                    onClick={() => {
                      onFetchUser(this.state.username);
                      onFetchRepo(this.state.username);
                    }}>
                    Find!
                  </Button>
                </Col>
              </Row>
            )}
          </RepositoryConsumer>
        )}
      </UserConsumer>
    );
  }
}

export default Search;
