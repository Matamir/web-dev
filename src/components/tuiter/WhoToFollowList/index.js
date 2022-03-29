import React from "react";
import WhoToFollowItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whos = useSelector((state) => state.who);
  return(<>
        <ul className="list-group wd-width-100">
        <li className="list-group-item wd-width-100">Who to follow</li>
            {
      whos.map(who => {
        return(<WhoToFollowItem who={who}/>);
      })
  }
        </ul>
  </>);
}
export default WhoToFollowList;
