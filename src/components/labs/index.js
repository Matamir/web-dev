import React from "react";
import Classes from "./classes";
import {Link} from "react-router-dom";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";

import ReduxExamples from "./redux-examples";


const Labs = () => {
  return(
      <>
        <h1>Lab 7</h1>
        <ReduxExamples/>

        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/tuiter">
          Tuiter
        </Link>


      </>
  )
};

export default Labs;
