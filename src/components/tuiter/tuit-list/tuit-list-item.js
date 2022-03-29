import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";

// Source: Piazza @588 instructor answer
function videoEmbed(link) {
  const embed = "https://www.youtube.com/embed/" + link;
  return(
      <iframe className={"wd-article-image"} src={embed}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>.</iframe>
  )
}


const TuitListItem = (
    {
      tuit = {
        "_id": "123",
        "topic": "Web Development",
        "postedBy": {
          "username": "ReactJS"
        },
        "liked": true,
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "tuit": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "attachments": {
          "video": "unKvMC3Y1kI"
        },
        "logo-image": "../../../images/react-blue.png",
        "avatar-image": "../../../images/react-blue.png",
        "stats": {
          "comments": 123,
          "retuits": 234,
          "likes": 345
        }
      }
    }) => {

  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };

  const stats = tuit.stats;
  const attachments = tuit.attachments;
  const postedBy = tuit.postedBy;

  let embed = <></>
  if(attachments !== undefined && attachments.video !== undefined) {
    console.log(attachments.video)
    embed = videoEmbed(attachments.video)
  }

  return(<>
        <ul className="list-group wd-width-100 wd-center-lineup">
        <li className="list-group-item wd-width-100">

          <i onClick={() =>
              deleteTuit(tuit)}
             className="fas fa-remove fa-2x
                  fa-pull-right">{"\u2715"}</i>

          <div className="wd-article-type">
            {tuit.topic}
          </div>


          <p>
            <img src={tuit["avatar-image"]}/>
            <strong> {postedBy.username} {"\u2713"}
              <h17 className={"wd-handle"}> @{tuit.handle} </h17>
            </strong> - {tuit.time} <br/>
            <strong> {tuit.title} </strong>
          </p>

          {tuit.tuit}

          <div>
            {embed}
          </div>


          <div className={"wd-article-stats"}>
            <TuitStats tuit={tuit}/>

          </div>
        </li>
      </ul>
  </>);
}
export default TuitListItem;

