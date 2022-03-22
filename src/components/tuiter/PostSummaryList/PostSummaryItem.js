import React from "react";

const PostSummaryItem = ({
      post = {
        topic: 'standin topic',
        userName: 'standInUsername',
        time: 'stand in time',
        title:"stand in title",
        image:"stand in image",
        tweets:"stand in tweet",
      }
    }
) => {
  return(<>
        <ul className="list-group wd-width-100 wd-center-lineup">
        <li className="list-group-item wd-width-100">

          <div className="wd-article-type">
            {post.topic}
            <img className="wd-article-image" src={post.image}/>
          </div>

          <p>
            <strong> {post.userName} {"\u2713"} </strong> - {post.time} <br></br>
            <strong> {post.title} </strong>
          </p>
          
          <p className = "wd-article-type"> {post.tweets} Tweets </p>

        </li>
      </ul>
  </>);
}
export default PostSummaryItem;

