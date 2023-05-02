const player = document.getElementById("player");
const game = document.getElementById("game");
const alien = document.getElementById("alien");
var score = document.getElementById("score");
var win = document.getElementById("win");
var btn = document.getElementById("btn");
var gameOver = document.getElementById("gameOver");
var over = document.getElementById("over");
var alienOne = document.getElementById("alienOne");
var btnThree = document.getElementById("btnThree");
const shoot = document.getElementById("shoot");
const gameoverone = document.getElementById("gameoverone");
var plan = document.getElementById("plan");

let counter = 0;

window.addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (playerLeft < 260) {
            player.style.left = (playerLeft + 130) + "px";
        }
    }
    if (e.key == "ArrowLeft") {
        var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
        if (playerLeft > 0) {
            player.style.left = (playerLeft - 130) + "px";
        }
    }
})

window.addEventListener("keydown", function (e) {
    if (e.key == "ArrowUp") {
        var canon = document.createElement("div");
        var img = document.createElement("img");
        img.src = "/images/img2.png";
        img.classList.add("bulletImg");
        canon.classList.add("bullet");
        canon.style.left = player.style.left;
        canon.appendChild(img);
        game.appendChild(canon);
        shoot.play();
    }
    setInterval(function collison() {
        var canonLeft = parseInt(window.getComputedStyle(canon).getPropertyValue("left"));
        var canonTop = parseInt(window.getComputedStyle(canon).getPropertyValue("top"));
        var alienLeft = parseInt(window.getComputedStyle(alien).getPropertyValue("left"));
        var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
        if (((canonTop - alienTop) < 365) && (alienTop < canonTop) && (alienLeft === canonLeft)) {
            var image = document.createElement("image");
            image.src = "/images/img9.gif";
            image.classList.add("explosion");
            canon.style.display = "none";
            alien.style.display = "none";
            counter++;
        }
    })
    setTimeout(function () {
        canon.remove();
    }, 2000)
})


function alienMove() {
    alien.style.display = "block";
    var random = ((Math.floor(Math.random() * 3)) * 130);
    alien.style.left = random + "px";
    alien.classList.add("alienMove");
    if (counter > 5) {
        alien.style.animationDuration = "1.5s";
    }
    if (counter > 10) {
        alien.style.animationDuration = "1s";
    }
    if (counter > 15) {
        alien.style.animationDuration = "0.8s";
    }
    if (counter > 20) {
        alien.style.animationDuration = "0.5s";
    }
}
setInterval(alienMove, 1000);

setInterval(function gameover() {
    var alienTop = parseInt(window.getComputedStyle(alien).getPropertyValue("top"));
    if (alienTop > 400) {
        gameOver.style.display = "block";
        over.innerHTML = `Your Score: ${counter}`;
        alienOne.style.display = "none";
        alien.style.display = "none";
        plan.style.display = "none";
        btnThree.style.display = "block";
        canon.style.display = "none";
        gameoverone.play();
    }
})
