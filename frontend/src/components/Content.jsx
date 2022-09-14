import React, { Component } from "react";
import classNames from "classnames";
import { Container, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import NavBar from "./DashboardNavbar";
import Board from "./Board";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardTitle: "To do board",
      cards: [
        {
          cardTitle: "Category One",
          categories: [
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                          fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
        {
          cardTitle: "Category Two",
          categories: [
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                          fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
        {
          cardTitle: "Category Three",
          categories: [
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                      fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                          fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
        {
          cardTitle: "Category Four",
          categories: [
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                        fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              categoryTitle: "Category title",
              tasks: [
                {
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit \
                                        fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
      ],
    };
    this.state = {};
  }
  render() {
    const renderBoardOrCreateOne = () => {
      if (Object.keys(this.state).length !== 0) {
        console.log("not");
        return (
          <Board
            boardTitle={this.state.boardTitle}
            cardList={this.state.cards}
          />
        );
      } else {
        const placement = 'right';
        return (
          <section className="px-5 pb-5">
            <OverlayTrigger
              key={placement}
              placement={placement}
              overlay={
                <Tooltip id={`tooltip-${placement}`}>Add a new board</Tooltip>
              }
            >
              <Button
                className="collapse-icon" /* variant="outline-info" */ /* onClick={this.props.toggle} */
              >
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </OverlayTrigger>
          </section>
        );
      }
    };

    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        {renderBoardOrCreateOne()}
      </Container>
    );
  }
}

export default Content;
