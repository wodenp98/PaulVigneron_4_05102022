const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const close = document.querySelector(".close");
const left = document.querySelector(".lightbox-left");
lightbox.style.display = "none";

function lightboxOpen() {
  const images = Array.from(document.querySelectorAll(".article-image"));
  images.forEach((image) =>
    image.addEventListener("click", (e) => {
      e.preventDefault();
      let test = image.src.split(".");
      test = test[test.length - 1];
      console.log(test);

      if (test === "jpg") {
        lightboxImg.innerHTML = `<img src="${image.src}" alt="" class="image-lightbox"/>`;
        console.log(lightboxImg);
      } else {
        lightboxImg.innerHTML = `<video controls src="${image.src}" alt="" class="image-lightbox" />`;
        console.log(lightboxImg);
      }
      lightbox.style.display = "block";
      header.style.display = "none";
      main.style.display = "none";
    })
  );
}

function lightboxClose() {
  close.addEventListener("click", (e) => {
    e.preventDefault();
    lightbox.style.display = "none";
    header.style.display = "block";
    main.style.display = "block";
  });
}

function lightboxNext() {
  left.addEventListener("click", (e) => {
    e.preventDefault();
    const images = Array.from(document.querySelectorAll(".article-image"));
    const gallery = images.map((image) => image.currentSrc);
    const currentImg = document.querySelector(".image-lightbox");

    let index = gallery.findIndex((img) => img === currentImg.currentSrc);

    console.log(index);
  });
}

function lightboxPrev() {}
