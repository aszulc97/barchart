let list = document.getElementById("bars");
let allBars = [];
let queueData = [];
createBar();

function createBar() {
  let li = document.createElement("li");
  let queueSize = getNumberOfCustomer();
  queueData.push(queueSize);
  allBars.push(li);
  li.style.height = queueSize * 2 + "px";
  li.addEventListener("mouseover", () => (li.textContent = queueSize));
  li.addEventListener("mouseout", () => (li.textContent = ""));
  list.appendChild(li);

  if (li.style.height == "62px" || li.style.height == "64px") {
    li.style.backgroundColor = "red";
  }

  if (li.style.height == "2px" || li.style.height == "4px") {
    li.style.backgroundColor = "green";
  }
  console.log(allBars.length);
  if (allBars.length > 25) {
    allBars[allBars.length - 26].style.backgroundColor = "#ddd";
    allBars[allBars.length - 26].style.opacity = "30%";
  }

  if (allBars.length === 40) {
    allBars.shift();
    queueData.shift();
    list.style.animation = "move 0.5s";
    list.addEventListener("animationend", () => (list.style.animation = "none"));
    list.querySelector("li").style.animation = "fadeOut 0.3s";
    list
      .querySelector("li")
      .addEventListener("animationend", () => list.querySelector("li").remove());
    // list.querySelector("li").remove();
  }
  setTimeout(() => createBar(), 600);
}

function getNumberOfCustomer() {
  return Math.floor(Math.random() * 32);
}
