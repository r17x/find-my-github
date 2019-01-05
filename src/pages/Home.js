import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import { UserProvider } from "../contexts/UserContext";
import { RepositoryProvider } from "../contexts/RepositoryContext";

import Repository from "../components/Repository";
import User from "../components/User";
import Search from "../components/Search";

const Home = () => {
  return (
    <div>
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand href="/">FindMyGitHub</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/kevinhermawan/find-my-github">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
      <Container style={styles.content}>
        <UserProvider>
          <RepositoryProvider>
            <FormGroup>
              <Search />
            </FormGroup>
            <Row>
              <Col lg="6" md="12" xs="12" style={styles.colLeft}>
                <User />
              </Col>
              <Col lg="6" md="12" xs="12">
                <Repository />
              </Col>
            </Row>
          </RepositoryProvider>
        </UserProvider>
      </Container>
    </div>
  );
};

const styles = {
  content: {
    marginTop: "20px"
  },
  colLeft: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
};

export default Home;
