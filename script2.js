canvas2 = document.getElementById("background")
ctx2 = canvas2.getContext("2d")
canvas2.height = window.innerHeight
canvas2.width = window.innerWidth

bgString = `images/IMG_0228.jpeg
images/IMG_0233.jpeg
images/IMG_0259.jpeg
images/IMG_2229.jpeg
images/IMG_3479.jpeg
images/IMG_3543.jpeg
images/IMG_3645.jpeg
images/IMG_3672.jpeg
images/IMG_4076.jpeg`
bgs = bgString.split(`
`)
backgrounds = []
c = 0
bgs.forEach((b) => {
    backgrounds.push(b)
    image = new Image()
    image.src = b
    image.onload = () => {
        if (canvas2.width/canvas2.height > image.width/image.height) {
            imageW = canvas2.width
            imageH = imageW*image.height/image.width
        } else {
            imageH = canvas2.height
            imageW = imageH*image.width/image.height
        }
        c += imageW
    }
})
offset = 0
function animate2() {
    requestAnimationFrame(animate2)
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height)

    current = 0
    backgrounds.forEach((bg) => {
        image = new Image()
        image.src = bg
        if (canvas2.width/canvas2.height > image.width/image.height) {
            imageW = canvas2.width
            imageH = imageW*image.height/image.width
        } else {
            imageH = canvas2.height
            imageW = imageH*image.width/image.height
        }
        ctx2.drawImage(image, current + offset, canvas2.height/2 - imageH/2, imageW, imageH)
        current += imageW
    })

    offset -= 10
    if (Math.abs(offset + current) <= 10 + imageW) {
        bgs.forEach((b) => {
            backgrounds.push(b)
        })
    }

    if (offset + 2*c <= 10) {
        offset += c
        backgrounds.splice(backgrounds.length - 1 - bgs.length, bgs.length)
    }
}

function resize() {
    canvas2.height = window.innerHeight
    canvas2.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
}

animate2()