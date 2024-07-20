let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h1 = document.querySelector("h1");

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("game is started");
    started = true;
    levelUp(); // Start the level when the game is started
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}


function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq=[];
  level++;
  h1.innerText = `Level ${level}`; 

  // Choose a random button.
  let randIdx = Math.floor(Math.random() * 3); 
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  //console.log(randIdx);
  //console.log(randColor);
  //console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}


function checkAns(idx){
  //console.log("curr level :",level);
  //let idx=level-1;

  if(userSeq[idx]==gameSeq[idx]){
    //console.log("same level");
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }else{
    h1.innerHTML =`Game Over! Your score was <b>${level}</br> press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}
function btnPress() {
    //console.log(this);
    let btn = this;
    userFlash(btn);


    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for( btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}