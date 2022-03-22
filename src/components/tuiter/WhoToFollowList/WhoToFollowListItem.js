import React from "react";

const WhoToFollowListItem = ({
      who = {
        avatarIcon: '../../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
      }
    }
) => {
  return(<>
        <li className="list-group-item wd-account-info">
          <img src={who.avatarIcon}
               className = "wd-account-image"/>
          {who.userName} {"\u2713"}

          <button className="btn btn-primary wd-account-follow">
            Follow
          </button>

          <div>
            @{who.handle}
          </div>
        </li>
  </>);
}
export default WhoToFollowListItem;

