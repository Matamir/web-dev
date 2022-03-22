import React from "react";
import whos from "./who.json";
import WhoToFollowItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
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
