const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-image");
const close = document.querySelector(".close");
const left = document.querySelector(".lightbox-left");
const right = document.querySelector(".lightbox-right");
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
    function display(nextImageAlt) {
      let test1 = nextImageAlt.split(".");
      test1 = test1[test1.length - 1];

      if (test1 === "jpg") {
        lightboxImg.innerHTML = `<img src="${nextImageAlt}" alt="" class="image-lightbox"/>`;
      } else {
        lightboxImg.innerHTML = `<video controls src="${nextImageAlt}" alt="" class="image-lightbox" />`;
      }

      console.log(test1);
    }
    display(nextImageAlt);
  });
}

function lightboxPrev() {
  left.addEventListener("click", (e) => {
    e.preventDefault();
    const images = Array.from(document.querySelectorAll(".article-image"));
    const gallery = images.map((image) => image.currentSrc);
    const currentImg = document.querySelector(".image-lightbox");

    let indexImg = gallery.findIndex((img) => img === currentImg.currentSrc);
    console.log(indexImg);

    if (indexImg === 0) {
      const prevImageAlt = images[images.length - 1].src;

      function display(prevImageAlt) {
        let test1 = prevImageAlt.split(".");
        test1 = test1[test1.length - 1];

        if (test1 === "jpg") {
          lightboxImg.innerHTML = `<img src="${prevImageAlt}" alt="" class="image-lightbox"/>`;
        } else {
          lightboxImg.innerHTML = `<video controls src="${prevImageAlt}" alt="" class="image-lightbox" />`;
        }

        console.log(test1);
      }
      display(prevImageAlt);
    } else {
      const prevImageAlt = images[indexImg - 1].src;

      function display(prevImageAlt) {
        let test1 = prevImageAlt.split(".");
        test1 = test1[test1.length - 1];

        if (test1 === "jpg") {
          lightboxImg.innerHTML = `<img src="${prevImageAlt}" alt="" class="image-lightbox"/>`;
        } else {
          lightboxImg.innerHTML = `<video controls src="${prevImageAlt}" alt="" class="image-lightbox" />`;
        }

        console.log(test1);
      }
      display(prevImageAlt);
    }
  });
}

function display(arg) {
  let test1 = arg.split(".");
  test1 = test1[test1.length - 1];

  if (test1 === "jpg") {
    lightboxImg.innerHTML = `<img src="${arg}" alt="" class="image-lightbox"/>`;
  } else {
    lightboxImg.innerHTML = `<video controls src="${arg}" alt="" class="image-lightbox" />`;
  }

  console.log(test1);
}
display(arg);
