// Tweet Completed Items
const tweetBtn = document.getElementById('tweet');

function tweetCompletedItem() {
  const completedItem = completeListArray;
  const twitterUrl = `https://twitter.com/intent/tweet?text= I completed! - ${completedItem} :) `;
  window.open(twitterUrl, '_blank');
}

tweetBtn.addEventListener('click', tweetCompletedItem);