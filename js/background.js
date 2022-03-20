const images = [
  "https://source.unsplash.com/random/?city,night",
  "https://source.unsplash.com/random/?morning",
  "https://source.unsplash.com/random/?space",
  "https://source.unsplash.com/random/?sky",
  "https://source.unsplash.com/random/?sea",
  "https://source.unsplash.com/random/?star",
  "https://source.unsplash.com/random/?mountain",
  "https://source.unsplash.com/random/?night",
  "https://source.unsplash.com/random/?sunset",
  "https://source.unsplash.com/random/?Wallpapers",
]

const chosenImage = Math.floor(Math.random() * images.length);
const bgImage = document.createElement("img");
bgImage.src = `${images[chosenImage]}`
document.body.appendChild(bgImage);