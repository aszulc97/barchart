let list = document.getElementById("bars");
let allBars = [];
createBar();

function createBar() {
  let li = document.createElement("li");
  allBars.push(li);
  li.style.height = getNumberOfCustomer() * 2 + "px";
  list.appendChild(li);
  console.log(allBars);

  if (allBars.length === 40) {
    allBars.shift();
    list.querySelector("li").remove();
  }
  setTimeout(() => createBar(), 500);
}

function getNumberOfCustomer() {
  return Math.floor(Math.random() * 32);
}
