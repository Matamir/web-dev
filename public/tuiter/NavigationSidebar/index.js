const NavigationSidebar = () => {
  return(`
            <div class="list-group d-none d-xl-block">

          <a href="../navigation.html"
             class="fab fa-twitter fa-1x list-group-item list-group-item-action" aria-current="true">
          </a>


          <a href="../home.html"
             class="fas fa-house-user list-group-item list-group-item-action" aria-current="true">
            Home
          </a>


          <a href="../ExploreScreen/explore.html"
             class="fas fa-hashtag list-group-item list-group-item-action active" aria-current="true">
            Explore
          </a>


          <a href="../notifications.html"
             class="fas fa-bell list-group-item list-group-item-action" aria-current="true">
            Notifications
          </a>



          <a href="../messages.html"
             class="fas fa-envelope list-group-item list-group-item-action" aria-current="true">
            Messages
          </a>




          <a href="../bookmarks.html"
             class="fas fa-bookmark list-group-item list-group-item-action" aria-current="true">
            Bookmarks
          </a>



          <a href="../lists.html"
             class="fas fa-list list-group-item list-group-item-action" aria-current="true">
            Lists
          </a>



          <a href="../profile.html"
             class="fas fa-user list-group-item list-group-item-action" aria-current="true">
            Profile
          </a>




          <a
              class="list-group-item list-group-item-action wd-padding-left-more-icon" aria-current="true">
            <span class="fa-stack fa-1x">
              <i class="fas fa-circle fa-stack-1x"></i>
              <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
            </span>
            More
          </a>


          <button class="btn btn-primary mt-1 wd-width-100">
            Tuit
          </button>



        </div>

      <div class="list-group d-xl-none">

        <a href="../navigation.html"
           class="fab fa-twitter fa-1x list-group-item list-group-item-action" aria-current="true">
        </a>


        <a href="../home.html"
           class="fas fa-house-user list-group-item list-group-item-action" aria-current="true">

        </a>

        <a href="../ExploreScreen/explore.html"
           class="fas fa-hashtag list-group-item list-group-item-action active" aria-current="true">
        </a>



        <a href="../notifications.html"
           class="fas fa-bell list-group-item list-group-item-action" aria-current="true">

        </a>



        <a href="../messages.html"
           class="fas fa-envelope list-group-item list-group-item-action" aria-current="true">

        </a>




        <a href="../bookmarks.html"
           class="fas fa-bookmark list-group-item list-group-item-action" aria-current="true">

        </a>



        <a href="../lists.html"
           class="fas fa-list list-group-item list-group-item-action" aria-current="true">

        </a>



        <a href="../profile.html"
           class="fas fa-user list-group-item list-group-item-action" aria-current="true">

        </a>




        <a
            class="list-group-item list-group-item-action wd-padding-left-more-icon" aria-current="true">
            <span class="fa-stack fa-1x">
              <i class="fas fa-circle fa-stack-1x"></i>
              <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
            </span>

        </a>


        <button class="btn btn-primary mt-1">
          Tuit
        </button>



      </div>
    `);
}
export default NavigationSidebar;

