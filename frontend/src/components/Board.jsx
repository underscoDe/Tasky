import React from "react";
import classnames from "classnames";


const Board = ({ boardTitle, cardList }) => {
  console.log(cardList);
  return (
    <section className="board px-5 pb-5">
      <h3>{boardTitle}</h3>
      <div className="d-flex flex-nowrap">
        {cardList.map((card, ind) => {
          return (
            <div className="p-1 board-card" key={ind}>
              <div className="card-container shadow px-3 py-4">
                <h5 className="card-title pb-3">
                  {card.cardTitle} | {card.categories.length}
                </h5>
                {card.categories.map((category, ind) => {
                  return (
                    <div className={classnames("category-container", {"first-cat": ind === 0})} key={ind}>
                      <h5 className="font-weight-bold">
                        {category.categoryTitle} | {category.tasks.length}
                      </h5>
                      {category.tasks.map((task, ind) => {
                        return (
                          <div className="task p-2 mt-2" key={ind}>
                            <div className="task-content">{task.content}</div>
                          </div>
                        )
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* <div className="p-1 board-card">
          <div className="card-container shadow px-3 py-4">
            <h5 className="card-title pb-3">To do | 6</h5>
            <div className="category-container h">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2 mt-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
              <div className="task p-2 mt-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 board-card">
          <div className="card-container shadow px-3 py-4">
            <h5 className="card-title pb-3">To do | 6</h5>
            <div className="category-container h">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 board-card">
          <div className="card-container shadow px-3 py-4">
            <h5 className="card-title pb-3">To do | 6</h5>
            <div className="category-container h">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-1 board-card">
          <div className="card-container shadow px-3 py-4">
            <h5 className="card-title pb-3">To do | 6</h5>
            <div className="category-container h">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
            <div className="category-container">
              <h5 className="font-weight-bold">Category title | 7</h5>
              <div className="task p-2">
                <div className="task-content">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
                  fuga quos ducimus excepturi commodi tempore sequi iusto.
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Board;
