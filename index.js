

const incbtn = document.getElementById("incbtn");
const decbtn = document.getElementById("decbtn");
const resetbtn = document.getElementById("resetbtn");
const Counterlabel = document.getElementById("Counterlabel");
let count=0;
incbtn.onclick = function(){
    count++;
    Counterlabel.textContent = count;
}
decbtn.onclick = function(){
    count--;
    Counterlabel.textContent = count;
}
resetbtn.onclick = function(){
    count =0;
    Counterlabel.textContent = count;
}