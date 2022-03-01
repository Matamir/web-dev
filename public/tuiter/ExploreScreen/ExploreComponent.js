import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
           <div class="row">
              <div>
                <input type="text" id="search" placeholder = &#128269Search
                  class="wd-search-bar wd-font"></input>
                  <br/>
              </div>


              <p class = "wd-gear" >
                <a href="explore-settings.html">&#x2699</a><br>
              </p>
           </div>
           
           
           
          <ul class="nav nav-tabs wd-middle navbar-expand">
            <li class="nav-item d-flex">
              <a class="nav-link active text-nowrap" href="./for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a class="nav-link" href="./entertainment.html">Entertainment</a>
            </li>
          </ul>

           
           
           
           <!-- image with overlaid text -->
           <img class = "wd-width-100" src="../spaceX-Starship.jpg">
           <div class="wd-middle-big-image-caption">SpaceX's Starship</div>
           
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

