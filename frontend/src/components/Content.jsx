import React, { Component } from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./DashboardNavbar";
import Board from "./Board";


class Content extends Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Board />
      </Container>
    );
  }
}

export default Content;
