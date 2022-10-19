const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const close = document.querySelector(".close");
const left = document.querySelector(".lightbox-left");
const right = document.querySelector(".lightbox-right");

lightbox.style.display = "none";

function lightboxDisplay(arg, arg2) {
  let media = arg.split(".");
  media = media[media.length - 1];

  if (media === "jpg") {
    lightboxImg.innerHTML = `<img src="${arg}" alt="${arg2}" class="image-lightbox"/>`;
    lightboxImg.innerHTML += `<p>${arg2}</p>`;
  } else {
    lightboxImg.innerHTML = `<video controls src="${arg}" alt="${arg2}" class="image-lightbox" />`;
    lightboxImg.innerHTML += `<p>${arg2}</p>`;
  }
}

function lightboxOpen() {
  const images = Array.from(document.querySelectorAll(".article-image"));
  images.forEach((image) =>
    image.addEventListener("click", (e) => {
      e.preventDefault();
      lightboxDisplay(image.src, image.alt);
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
    const nextImageAlt = images[indexImg + 1].getAttribute("alt");
    const nextImageSrc = images[indexImg + 1].src;

    lightboxDisplay(nextImageSrc, nextImageAlt);
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
      const prevImageSrc = images[images.length - 1].src;
      const prevImageAlt = images[images.length - 1].getAttribute("alt");
      lightboxDisplay(prevImageSrc, prevImageAlt);
    } else {
      const prevImageSrc = images[indexImg - 1].src;
      const prevImageAlt = images[indexImg - 1].getAttribute("alt");
      lightboxDisplay(prevImageSrc, prevImageAlt);
    }
  });
}

function lightboxGlobal() {
  lightboxOpen();
  lightboxClose();
  lightboxNext();
  lightboxPrev();
}
