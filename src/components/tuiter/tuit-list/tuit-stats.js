import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };

  const stats = tuit.stats;

  return (<>
    <a href={""} className = "wd-article-statistic"> {"\u29C2"}{stats.comments}{stats.replies}</a>
    <a href={""} className = "wd-article-statistic"> {"\u2B94"}{stats.retuits} </a>

    <span onClick={likeTuit}>
      {
        tuit.liked &&
        <i className="fas fa-heart me-1"
           style={{color: 'red'}}></i>
      }
      {
        !tuit.liked &&
        <i className="far fa-heart me-1"></i>
      }
      {tuit.stats && tuit.stats.likes}
    </span>
  </>);
}
export default TuitStats;

