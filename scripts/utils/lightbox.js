const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const close = document.querySelector(".close");
const left = document.querySelector(".lightbox-left");
const right = document.querySelector(".lightbox-right");

lightbox.style.display = "none";

function lightboxDisplay(arg) {
  let media = arg.split(".");
  media = media[media.length - 1];

  if (media === "jpg") {
    lightboxImg.innerHTML = `<img src="${arg}" alt="${arg}" class="image-lightbox"/>`;
  } else {
    lightboxImg.innerHTML = `<video controls src="${arg}" alt="" class="image-lightbox" />`;
  }
}

function lightboxOpen() {
  const images = Array.from(document.querySelectorAll(".article-image"));
  images.forEach((image) =>
    image.addEventListener("click", (e) => {
      e.preventDefault();
      lightboxDisplay(image.src);
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
  right.addEventListener("click", (e) => {
    e.preventDefault();
    const images = Array.from(document.querySelectorAll(".article-image"));
    const gallery = images.map((image) => image.currentSrc);
    const currentImg = document.querySelector(".image-lightbox");

    let indexImg = gallery.findIndex((img) => img === currentImg.currentSrc);

    if (indexImg === gallery.length - 1) {
      indexImg = -1;
    }
    const nextImageAlt = images[indexImg + 1].src;

    lightboxDisplay(nextImageAlt);
  });
}

function lightboxPrev() {
  left.addEventListener("click", (e) => {
    e.preventDefault();
    const images = Array.from(document.querySelectorAll(".article-image"));
    const gallery = images.map((image) => image.currentSrc);
    const currentImg = document.querySelector(".image-lightbox");

    let indexImg = gallery.findIndex((img) => img === currentImg.currentSrc);

    if (indexImg === 0) {
      const prevImageAlt = images[images.length - 1].src;
      lightboxDisplay(prevImageAlt);
    } else {
      const prevImageAlt = images[indexImg - 1].src;
      lightboxDisplay(prevImageAlt);
    }
  });
}

function lightboxGlobal() {
  lightboxOpen();
  lightboxClose();
  lightboxNext();
  lightboxPrev();
}
