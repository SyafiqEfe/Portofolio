function toggleVideo() {
  const trailer = document.querySelector("trailer");
  const vidoe = document.querySelector("Video");
  vidoe.pause();
  trailer.classList.toggle("active");
}

function changeBg(bg, title) {
  const banner = document.querySelector(".banner");
  const contents = document.querySelector(".content");
  banner.style.backgroundImage = `url("img/movies/${bg}")`;
  banner.style.backgroundSize = "cover";
  banner.style.backgroundPosition = "center";

  contents.forEach((content) => {
    content.classList.remove("active");
    if (content.classList.contains(title)) {
      content.classList.add("active");
    }
  });
}
