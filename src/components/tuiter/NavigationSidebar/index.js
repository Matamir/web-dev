import React from "react";

const NavigationSidebar = ({active='explore'}) => {
  return(<>
            <div className="list-group d-none d-xl-block">

          <a href="../navigation.html"
             className="fab fa-twitter fa-1x list-group-item list-group-item-action" aria-current="true">
          </a>


          <a href="../home.html"
             className="fas fa-house-user list-group-item list-group-item-action" aria-current="true">
            Home
          </a>


          <a href="../ExploreScreen/explore.html"
             className="fas fa-hashtag list-group-item list-group-item-action active" aria-current="true">
            Explore
          </a>


          <a href="../notifications.html"
             className="fas fa-bell list-group-item list-group-item-action" aria-current="true">
            Notifications
          </a>



          <a href="../messages.html"
             className="fas fa-envelope list-group-item list-group-item-action" aria-current="true">
            Messages
          </a>




          <a href="../bookmarks.html"
             className="fas fa-bookmark list-group-item list-group-item-action" aria-current="true">
            Bookmarks
          </a>



          <a href="../lists.html"
             className="fas fa-list list-group-item list-group-item-action" aria-current="true">
            Lists
          </a>



          <a href="../profile.html"
             className="fas fa-user list-group-item list-group-item-action" aria-current="true">
            Profile
          </a>




          <a
              className="list-group-item list-group-item-action wd-padding-left-more-icon" aria-current="true">
            <span className="fa-stack fa-1x">
              <i className="fas fa-circle fa-stack-1x"></i>
              <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
            </span>
            More
          </a>


          <button className="btn btn-primary mt-1 wd-width-100">
            Tuit
          </button>



        </div>

      <div className="list-group d-xl-none">

        <a href="../navigation.html"
           className="fab fa-twitter fa-1x list-group-item list-group-item-action" aria-current="true">
        </a>


        <a href="../home.html"
           className="fas fa-house-user list-group-item list-group-item-action" aria-current="true">

        </a>

        <a href="../ExploreScreen/explore.html"
           className="fas fa-hashtag list-group-item list-group-item-action active" aria-current="true">
        </a>



        <a href="../notifications.html"
           className="fas fa-bell list-group-item list-group-item-action" aria-current="true">

        </a>



        <a href="../messages.html"
           className="fas fa-envelope list-group-item list-group-item-action" aria-current="true">

        </a>




        <a href="../bookmarks.html"
           className="fas fa-bookmark list-group-item list-group-item-action" aria-current="true">

        </a>



        <a href="../lists.html"
           className="fas fa-list list-group-item list-group-item-action" aria-current="true">

        </a>



        <a href="../profile.html"
           className="fas fa-user list-group-item list-group-item-action" aria-current="true">

        </a>




        <a
            className="list-group-item list-group-item-action wd-padding-left-more-icon" aria-current="true">
            <span className="fa-stack fa-1x">
              <i className="fas fa-circle fa-stack-1x"></i>
              <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
            </span>

        </a>


        <button className="btn btn-primary mt-1">
          Tuit
        </button>



      </div>
  </>);
}
export default NavigationSidebar;

