const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

let gravity = 0.6
let gameSpeed = 6
let score = 0
let gameOver = false

const dino = {
    x: 50,
    y: 160,
    width: 40,
    height: 40,
    yVelocity: 0,
    jumping: false
}

const obstacles = []

function drawDino(ctx, x, y) {
  ctx.fillStyle = "#2b2b2b";
 
  ctx.beginPath();
  ctx.arc(x, y, 14, 0, Math.PI * 2);
  ctx.fill();
 
  ctx.beginPath();
  ctx.arc(x + 18, y - 10, 10, 0, Math.PI * 2);
  ctx.fill();
 
  ctx.fillStyle = "#fff";
  ctx.beginPath();
  ctx.arc(x + 21, y - 12, 2, 0, Math.PI * 2);
  ctx.fill();
 
  ctx.fillStyle = "#2b2b2b";
 
  ctx.beginPath();
  ctx.arc(x - 6, y + 16, 4, 0, Math.PI * 2);
  ctx.arc(x + 6, y + 16, 4, 0, Math.PI * 2);
  ctx.fill();
}

function drawCactus(ctx, x, y) {
  ctx.fillStyle = "#1b5e20";
 
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, Math.PI * 2);
  ctx.arc(x, y - 14, 10, 0, Math.PI * 2);
  ctx.arc(x, y - 28, 10, 0, Math.PI * 2);
  ctx.fill();
 
  ctx.beginPath();
  ctx.arc(x - 14, y - 14, 6, 0, Math.PI * 2);
  ctx.arc(x - 14, y - 24, 6, 0, Math.PI * 2);
  ctx.fill();
 
  ctx.beginPath();
  ctx.arc(x + 14, y - 10, 6, 0, Math.PI * 2);
  ctx.arc(x + 14, y - 20, 6, 0, Math.PI * 2);
  ctx.fill();
}

function spawnObstacle() {
    obstacles.push({
        x: canvas.width,
        y: 178,
        width: 30,
        height: 40
    })
}

function randomSpawn() {
    if (gameOver) return;

    spawnObstacle();

    const delay = Math.random() * 2000 + 1000;
    setTimeout(randomSpawn, delay);
}

randomSpawn()

document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !dino.jumping && !gameOver) {
        dino.yVelocity = -12
        dino.jumping = true
    }
})

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (!gameOver) {
        update()
        draw()
        score++
    } else {
        drawGameOver()
    }

    requestAnimationFrame(gameLoop)
}

function update() {
    dino.yVelocity += gravity
    dino.y += dino.yVelocity

    if (dino.y >= 150) {
        dino.y = 150
        dino.yVelocity = 0
        dino.jumping = false
    }

    gameSpeed = 6 + Math.floor(score / 3000)
    for (let i = obstacles.length - 1; i >= 0; i--) {
        obstacles[i].x -= gameSpeed

        if (obstacles[i].x + obstacles[i].width < 0) {
            obstacles.splice(i, 1)
        }
    }

    for (let obs of obstacles) {
        if (checkCollision(dino, obs)) {
            gameOver = true
        }
    }
}


function draw() {
    drawDino(ctx, dino.x + 20, dino.y + 20)
    for (let obs of obstacles) {
        drawCactus(ctx, obs.x + 10, obs.y)
    }    ctx.fillStyle = "black"
    ctx.font = "16px Arial"
    ctx.fillText("Score: " + score, 10, 20)
}

function drawGameOver() {
    ctx.fillStyle = "black"
    ctx.font = "30px Arial"
    ctx.fillText("Game over", 300, 100)
    ctx.font = "16px Arial"
    ctx.fillText("Refresh to start", 315, 130)
}


function checkCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}

gameLoop()
