// //step1
// let color = ["red", "yellow", "green", "blue"];
// let level = 0
// let userSeq = [];
// let gameSeq = [];
// let h2 = document.querySelector("h2");
// let started = false


// //step2
// document.querySelector("body").addEventListener("keypress", () => {
//    if(started == false) {
//     started = true;
//     levelUp();
//    }
// });


// //step3
// const userFlash = (id) => {
//     document.querySelector(`#${id}`).classList.add("userFlash");
//     setTimeout(() => {
//         document.querySelector(`#${id}`).classList.remove("userFlash");
//     }, 250);
// };

// //step4
// const gameFlash = (id) => {
//     document.querySelector(`#${id}`).classList.add("gameFlash");
//     setTimeout(() => {
//         document.querySelector(`#${id}`).classList.remove("gameFlash");
//     }, 250);
// };


// //step5
// const levelUp = () => {
//     userSeq = [];
//     level++;
//     let randIdx = Math.floor(Math.random()*4);
//     let colorId = color[randIdx];
//     gameSeq.push(colorId);
//     gameFlash(colorId);
//     h2.innerText = `Level - ${level}`;
//     console.log(gameSeq);
// };


// //step8
// const checkAns = (id) => {
//     if(userSeq[id] === gameSeq[id]) {
//         if(userSeq.length === gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(() => {
//         document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         h2.innerText = `Game Over! Your score was ${level}.  Press any key to start`
//         reset();
//     }
// };


// //step7
// function btnPress () {
//     let btn = this.id;
//     userFlash(btn);
//     userSeq.push(btn);
//     checkAns(userSeq.length - 1);    
// };

// //step6
// const allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress)
// };


// //step9
//   function reset() {
//     started = false;
//     if (level > getHighestScore()) {
//       setHighestScore(level);
//     }
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//       // Add this function to update the displayed highest score
//   function updateHighestScore() {
//     document.getElementById('highest-score').innerText = `Highest Score: ${getHighestScore()}`;
//   }

//   // Call this function when the page loads to display the highest score
//   updateHighestScore();
//   }


//   //To show the highest score
//   function setHighestScore(score) {
//     localStorage.setItem('highestScore', score);
//   }

//   function getHighestScore() {
//     return parseInt(localStorage.getItem('highestScore')) || 0;
//   }


let btns = document.querySelectorAll(".btn");
let level = 0;
let userSeq = [];
let gameSeq = [];
let started = false;

document.querySelector("body").addEventListener("keypress", () => {
    if (!started) {
        levelUp()
        started = true;
    }
});


const gameFlash = (color) => {
    document.querySelector(`#${color}`).classList.add("gameFlash")
    setTimeout(() => {
        document.querySelector(`#${color}`).classList.remove("gameFlash");
    }, 250);
};


const userFlash = (id) => {
    document.querySelector(`#${id}`).classList.add("userFlash")
    setTimeout(() => {
        document.querySelector(`#${id}`).classList.remove("userFlash");
    }, 250);
};


const levelUp = () => {
    userSeq = [];
    let randColor = getGameSeq();
    gameSeq.push(randColor);
    gameFlash(randColor);
    level++
    document.querySelector("h2").innerText = `Level - ${level}`
};


const getGameSeq = () => {
    let colors = ["red", "green", "yellow", "blue"];
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = colors[randIdx];

    return randColor;
};



const gameOver = () => {
    document.querySelector("h2").innerText = `Game over! Your Score was ${level}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
        document.querySelector("body").style.backgroundColor = "white";
    }, 250);
    resetGame()
};


const checkSeq = (length) => {
    if (userSeq[length] === gameSeq[length]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        gameOver();
    }
};


for (let btn of btns) {
    btn.addEventListener("click", () => {
        userColor = btn.id;
        userFlash(userColor);
        userSeq.push(userColor)
        checkSeq(userSeq.length - 1)
    })
};

const setHighestScore = (score) => {
    localStorage.setItem("highestScore", score)
}

const getHighestScore = () => {
    return parseInt(localStorage.getItem("highestScore")) || 0
}

const resetGame = () => {
    if(level > getHighestScore()) {
        setHighestScore(level)
    }
    started = false;
    level = 0;
    gameSeq = []
    userSeq = []
    document.querySelector("#highest-score").innerText = `Highest Score - ${getHighestScore()} `
};


document.querySelector("#reset-btn").addEventListener("click", () => {
    document.querySelector("h2").innerText = "Press any key start again.";
    resetGame();
});

