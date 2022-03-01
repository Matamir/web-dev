const WhoToFollowListItem = (who) => {
  return(`
        <li class="list-group-item wd-account-info">
          <img class = "wd-account-image" src=${who.avatarIcon}>
          ${who.userName} &#10003

          <button class="btn btn-primary wd-account-follow">
            Follow
          </button>

          <div>
            @${who.title}
          </div>
        </li>
    `);
}
export default WhoToFollowListItem;

