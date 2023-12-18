let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent = saveEl.textContent + countStr;
  console.log(saveEl.textContent);
  count = 0;
  countEl.textContent = 0;
}

function reset() {
  count = 0;
  countEl.textContent = 0;
  saveEl.textContent = "Previous Entries:";
  console.log("Reset!");
}
