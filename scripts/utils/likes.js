function total() {
  const likes = document.querySelectorAll(".article-likes");
  const totalLike = document.querySelector(".total-likes");
  let total = 0;

  likes.forEach((element) => {
    const likeCount = Number(element.textContent);
    total += likeCount;
  });
  const displayTotal =
    (totalLike.innerHTML = `${total} <i class="fas fa-heart"></i> `);
  return displayTotal;
}

function like() {
  const emptyHeart = document.querySelectorAll(".empty-heart");
  const fullHeart = document.querySelectorAll(".full-heart");

  for (let i = 0; i < emptyHeart.length; i++) {
    emptyHeart[i].addEventListener("click", (e) => {
      let heartClicked = e.path[2].children[0];
      console.log(heartClicked);
      let heartLiked = Number(heartClicked.innerText);
      console.log(heartLiked);
      let liked = heartLiked + 1;
      console.log(liked);
      heartClicked.innerHTML = heartLiked + 1;
      console.log(heartClicked);

      if ((heartClicked = liked)) {
        emptyHeart[i].style.display = "none";
        fullHeart[i].style.display = "inline";
        total();
      }
    });
  }
}

function dislike() {
  const emptyHeart = document.querySelectorAll(".empty-heart");
  const fullHeart = document.querySelectorAll(".full-heart");

  for (let i = 0; i < fullHeart.length; i++) {
    fullHeart[i].addEventListener("click", (e) => {
      let heartClicked = e.path[2].children[0];
      let heartLiked = Number(heartClicked.innerText);
      let liked = heartLiked - 1;
      heartClicked.innerHTML = heartLiked - 1;

      if ((heartClicked = liked)) {
        emptyHeart[i].style.display = "inline";
        fullHeart[i].style.display = "none";
        total();
      }
    });
  }
}

function likesGlobal() {
  total();
  like();
  dislike();
}
