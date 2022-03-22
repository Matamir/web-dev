import React from "react";

import PostSummaryList from "../PostSummaryList/index";

const ExploreComponent = () => {
  return(<>
           <div className="row">
              <div>
                <input type="text" id="search" placeholder = {`\uFE0ESearch`}
                className="wd-search-bar wd-font"/>
                  <br/>
              </div>


              <p className = "wd-gear" >
                <a href="explore-settings.html">{"\u2699"}</a><br></br>
              </p>
           </div>
           
           
           
          <ul className="nav nav-tabs wd-middle navbar-expand">
            <li className="nav-item d-flex">
              <a className="nav-link active text-nowrap" href="./for-you.html">For you</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./trending.html">Trending</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./news.html">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./sports.html">Sports</a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="./entertainment.html">Entertainment</a>
            </li>
          </ul>

           
           
           
           <img className = "wd-width-100" src="../spaceX-Starship.jpg"/>
           <div className="wd-middle-big-image-caption">SpaceX's Starship</div>
           <PostSummaryList/>
           
    </>);
}
export default ExploreComponent;

