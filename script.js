let list = document.getElementById("bars");
let allBars = [];
createBar();

function createBar() {
  let li = document.createElement("li");
  allBars.push(li);
  li.style.height = getNumberOfCustomer() * 2 + "px";
  list.appendChild(li);
  console.log(allBars);

  if (allBars.length === 10) {
    allBars.shift();
    list.style.animation = "move 0.5s";
    list.addEventListener("animationend", () => (list.style.animation = "none"));
    list.querySelector("li").style.animation = "fadeOut 0.3s";
    list
      .querySelector("li")
      .addEventListener("animationend", () => list.querySelector("li").remove());
    // list.querySelector("li").remove();
  }
  setTimeout(() => createBar(), 1000);
}

function getNumberOfCustomer() {
  return Math.floor(Math.random() * 32);
}
