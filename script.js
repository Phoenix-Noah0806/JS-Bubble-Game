
function bubbles() {
  var clutter = "";
  for (let i = 1; i <= 200; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#pbot").innerHTML = clutter;
}

var time = 60;
function timerInt() {
  let int = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timer").innerText = time;
    } else {
      clearInterval(int);
      document.querySelector("#pbot").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
var hitrn=0;
function hit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hit").innerText=hitrn;
}

var point=0;
function increaseScore(){
    point+=10;
    document.querySelector("#score").innerText=point;
}
document.querySelector("#pbot").addEventListener("click",function(e){
    var target=Number(e.target.textContent);
    if(target===hitrn){

        increaseScore()
        bubbles();
        hit();

    }
})
bubbles();
timerInt();
hit();