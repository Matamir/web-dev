import whos from "./who.js";
import WhoToFollowItem from "./WhoToFollowListItem.js";


const WhoToFollowList = () => {
  return(`
        <ul class="list-group wd-width-100">
        <li class="list-group-item wd-width-100">Who to follow</li>
            ${
      whos.map(who => {
        return(WhoToFollowItem(who));
      }).join('')
  }
        </ul>
    `);
}
export default WhoToFollowList;
