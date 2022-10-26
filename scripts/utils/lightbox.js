const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const close = document.querySelector(".close");
const left = document.querySelector(".lightbox-left");
const right = document.querySelector(".lightbox-right");

lightbox.style.display = "none";

function lightboxDisplay(lightSrc, lightAlt) {
  let media = lightSrc.split(".");
  media = media[media.length - 1];

  if (media === "jpg") {
    lightboxImg.innerHTML = `<img src="${lightSrc}" alt="${lightAlt}, closeup view" class="image-lightbox"/>`;
    lightboxImg.innerHTML += `<p>${lightAlt}</p>`;
  } else {
    lightboxImg.innerHTML = `<video controls src="${lightSrc}" alt="${lightAlt}, closeup view" class="image-lightbox" />`;
    lightboxImg.innerHTML += `<p>${lightAlt}</p>`;
  }
}

function lightboxOpen() {
  const images = Array.from(document.querySelectorAll(".article-image"));
  images.forEach((image) =>
    image.addEventListener("click", (e) => {
      e.preventDefault();
      lightboxDisplay(image.src, image.alt);
      lightbox.style.display = "block";
      /*eslint no-undef: "error"*/
      // eslint-disable-next-line no-undef
      header.style.display = "none";
      /*eslint no-undef: "error"*/
      // eslint-disable-next-line no-undef
      main.style.display = "none";
    })
  );
}

function lightboxClose() {
  lightbox.style.display = "none";
  // eslint-disable-next-line no-undef
  header.style.display = "block";
  // eslint-disable-next-line no-undef
  main.style.display = "block";
}

function lightboxNext() {
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
}

function lightboxPrev() {
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
}

close.addEventListener("click", (e) => {
  e.preventDefault();
  lightboxClose();
});

right.addEventListener("click", (e) => {
  e.preventDefault();
  lightboxNext();
});

left.addEventListener("click", (e) => {
  e.preventDefault();
  lightboxPrev();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.target.click();
  }
  if (e.key === "Escape") {
    lightboxClose();
  }
  if (e.key === "ArrowRight") {
    lightboxNext();
  }
  if (e.key === "ArrowLeft") {
    lightboxPrev();
  }
});

// eslint-disable-next-line no-unused-vars
function lightboxGlobal() {
  lightboxOpen();
  lightboxClose();
  const images = Array.from(document.querySelectorAll(".article-image"));

  images.forEach((image) =>
    image.addEventListener("click", (e) => {
      e.preventDefault();

      const lightSrc = image.src;
      const lightAlt = image.alt;

      lightboxDisplay(lightSrc, lightAlt);
    })
  );
}
