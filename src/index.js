import data from "./data";
import "./style.css"
import testImage from "./assets/images/screenshot.png";

const arr = data();
const ul = document.createElement("ul");
arr.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item.name;
    ul.appendChild(li);
});
document.body.appendChild(ul);

const img = document.createElement("img");
img.src = testImage;
document.body.prepend(img);

const h1 = document.createElement("h1");
h1.innerText = "Title";
document.body.prepend(h1);