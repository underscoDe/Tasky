import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  /* faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy, */
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
/* import SubMenu from "./SubMenu"; */
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";
import logo from "../assets/images/checklist.svg";

class Sidebar extends Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3 className="d-inline-flex align-items-center">
            <img src={logo} width="35px" height="35px" alt="Tasky" />
            <span className="ml-1">Dashboard</span>
          </h3>
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">User</p>

          <Nav.Item className="active">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Board
            </Nav.Link>
          </Nav.Item>

          {/* <SubMenu
            title="Pages"
            icon={faCopy}
            items={["Link", "Link2", "Active"]}
          /> */}

          {/* <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Portfolio
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              FAQ
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </div>
    );
  }
}

export default Sidebar;
