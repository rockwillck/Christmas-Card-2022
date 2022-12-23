canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

snows = []
poss = ["1.png"]
frame = 1
function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (i=0;i<5;i++) {
        snows.push([Math.random()*canvas.width, 0, canvas.height/50*Math.random() + canvas.height/100])
    }

    snows.forEach((snow, index) => {
        snow[1] += snow[2]
        ctx.fillStyle = "white"
        ctx.beginPath()
        ctx.arc(snow[0], snow[1], canvas.width*0.005, 0, 2*Math.PI)
        ctx.closePath()
        ctx.fill()
        if (snow[1] > canvas.height) {
            snows.splice(index, 1)
        }
    })

    frame++
}

animate()