import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid'
import classNames from "classnames";
import { Container } from "react-bootstrap";
import FormContainer from './modals/FormContainer'
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
          id: uuidv4(),
          cardTitle: "Category One",
          categories: [
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          cardTitle: "Category Two",
          categories: [
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          cardTitle: "Category Three",
          categories: [
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
        {
          id: uuidv4(),
          cardTitle: "Category Four",
          categories: [
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
            {
              id: uuidv4(),
              categoryTitle: "Category title",
              tasks: [
                {
                  id: uuidv4(),
                  content:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit fuga quos ducimus excepturi commodi tempore sequi iusto.",
                },
              ],
            },
          ],
        },
      ],
    };
    this.state = {};
  }
  onSubmit = (event) => {
    event.preventDefault(event);
    this.setState({
      boardTitle: event.target.title.value,
      cards: []
    })
  };

  addCard = (event) => {
    event.preventDefault(event);
    const newCard = {
      id: uuidv4(),
      cardTitle: event.target.title.value,
      categories: []
    }
    const newState = {
      ...this.state,
      cards: [...this.state.cards, newCard]
    }
    this.setState({...newState})
    console.log(event.target.title.value, newState)
  }

  render() {
    const triggerText = <FontAwesomeIcon icon={faPlus} />
    const classes = "collapse-icon"
    const tooltipText = "Add a new board"
    const currentForm = 'ADD_BOARD'
    const renderBoardOrCreateOne = () => {
      if (Object.keys(this.state).length !== 0) {
        return (
          <Board
            boardTitle={this.state.boardTitle}
            cardList={this.state.cards}
            addCard={this.addCard}
          />
        );
      } else {
        return (
          <section className="px-5 pb-5">
            <FormContainer
              triggerText={triggerText}
              onSubmit={this.onSubmit}
              classes={classes}
              tooltipText={tooltipText}
              currentForm={currentForm} />
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
