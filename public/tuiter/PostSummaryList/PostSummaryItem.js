const PostSummaryItem = (post) => {
  return(`
        <ul class="list-group wd-width-100 wd-center-lineup">
        <li class="list-group-item wd-width-100">

          <div class="wd-article-type">
            ${post.topic}
            <img class="wd-article-image" src=${post.image}>
          </div>

          <p>
            <strong> ${post.userName} &#10003 </strong> - ${post.time} <br>
            <strong> ${post.title} </strong>
          </p>
          
          <p class = wd-article-type> ${post.tweets} Tweets </p>

        </li>
      </ul>
    `);
}
export default PostSummaryItem;

