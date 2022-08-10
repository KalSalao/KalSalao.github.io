for (let i = 1; i <= 16; i++) {
    let myDiv = document.createElement("div");
    document.body.appendChild(myDiv);
}

let random = number => {return Math.floor(Math.random() * number);}
let bgChange = rndCol => {return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";}

let divs = document.querySelectorAll("div");
for (let i = 0; i < divs.length; i++) {
    divs[i].onclick = function (e) {
        if(i % 2 !== 0) {
            e.target.style.backgroundColor = "yellow";
        } else {
            e.target.style.backgroundColor = bgChange();
        }
    }
}