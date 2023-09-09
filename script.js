const img = document.querySelector(".img")
const wordArray = document.querySelectorAll(".word")


document.addEventListener("mousemove", (e) => {
  wordArray.forEach((el) => {
    el.classList.remove("hovered");
  });

  const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
  console.log(hoveredElement)
  if (hoveredElement && hoveredElement.classList.contains("word")) {
    hoveredElement.classList.add("hovered");
  }

  imgPos(e, img)
})

const imgPos = (e, image) => {
  const mousePosX = e.clientX;
  const mousePosY = e.clientY;
  // console.log(image.getBoundingClientRect().width * 0.5)
  image.style.left = mousePosX - (image.getBoundingClientRect().width * 0.5) + "px";
  image.style.top = mousePosY - (image.getBoundingClientRect().height * 0.5) + "px";
  appear(e, image)
}

const appear = (e, image) => {
  for (let i = 0; i < wordArray.length; i++) {
    const el = wordArray[i];
    // console.log(getComputedStyle(el))
    if (el.classList.contains("hovered")) {
      image.src = el.innerHTML + ".jpg";
      image.style.animation = "appear 0.1s ease-in forwards";
      break;
    } else {
      image.src = "";
      image.style.animation = "";
    }
  }
}