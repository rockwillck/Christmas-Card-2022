canvas2 = document.getElementById("background")
ctx2 = canvas2.getContext("2d")
canvas2.height = window.innerHeight
canvas2.width = window.innerWidth

bgString = `images/IMG_0228.jpeg
images/IMG_0233.jpeg
images/IMG_0259.jpeg
images/IMG_2229.jpeg
images/IMG_3479.jpeg
images/IMG_3645.jpeg
images/IMG_3672.jpeg
images/IMG_4076.jpeg
images/Screen Shot 2022-12-22 at 9.10.08 PM.png`
var bgs = bgString.split(`
`)

function generateList() {
    let c = 0
    let backgrounds = []
    for (i=0;i<bgs.length;i++) {
        b = bgs[i]
        let image = new Image()
        image.src = b
        image.onload = () => {
            let imageW = canvas2.height*image.width/image.height
            backgrounds.push([image, c, imageW])
            c += imageW
        }
    }

    return backgrounds
}

var carousel = generateList()
function animate2() {
    requestAnimationFrame(animate2)
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)

    speed = canvas2.width/100
    // carousel.forEach((bg) => {
    //     if ((bg[1] >= 0 && bg[1] + bg[2] <= canvas2.width) || (bg[1] <= 0 && bg[1] + bg[2] >= canvas2.width)) {
    //         speed = canvas2.width/500
    //     }
    // })
    carousel.forEach((bg, index) => {
        ctx2.drawImage(bg[0], bg[1], 0, bg[2], canvas2.height)
        bg[1] -= speed
        if (bg[1] + bg[2] < 0) {
            carousel.splice(index, 1)
            bg[1] = carousel[carousel.length-1][1] + carousel[carousel.length-1][2]
            carousel.push(bg)
        }
        // ctx.lineWidth = 10
        // ctx.beginPath()
        // ctx.moveTo(bg[1], 0)
        // ctx.lineTo(bg[1], canvas2.height)
        // ctx.closePath()
        // ctx.stroke()
        // ctx.beginPath()
        // ctx.moveTo(bg[1] + bg[2], 0)
        // ctx.lineTo(bg[1] + bg[2], canvas2.height)
        // ctx.closePath()
        // ctx.stroke()
    })
    // img = new Image()
    // img.src = "images/Screen Shot 2022-12-22 at 9.10.08 PM.png"
    // // img.onload = () => {
    //     ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height)
    // // }
}
animate2()

function resize() {
    canvas2.height = window.innerHeight
    canvas2.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    carousel = generateList()
}