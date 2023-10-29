let count = 0;

const countHeader = document.getElementById('count');
const countAddBtn = document.getElementById('add');
const countSubtractBtn = document.getElementById('subtract');

countHeader.innerText = count
countAddBtn.addEventListener("click", () => {
    count++;
    countHeader.innerText = count;
})

countSubtractBtn.addEventListener("click", () => {
    count--;
    countHeader.innerText = count;
})