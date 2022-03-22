import React from "react";
import Classes from "./classes";

import {Link} from "react-router-dom";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output/index";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";


const Labs = () => {
  return(
      <>
        <h1>Labs</h1>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <TodoList/>

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
