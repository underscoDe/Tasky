import React, { Component } from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from "./DashboardNavbar";
import Board from "./Board";

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
  }
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <Board boardTitle={this.state.boardTitle} cardList={this.state.cards} />
      </Container>
    );
  }
}

export default Content;
