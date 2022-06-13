function progressImg () {
    num = 0
}
let timeTaken = 0
let endTime = 0
let startTime = 0
let start = 0
let num = 0
let running = 0
num = 0
let goImg = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
let Img2 = images.createImage(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
let img3 = images.createImage(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
let images2 = [goImg, Img2, img3]
basic.forever(function () {
    if (!(running)) {
        start = randint(0, 10)
        if (start == 1) {
            running = 1
            images2[num].showImage(0)
            startTime = input.runningTime()
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        endTime = input.runningTime()
        timeTaken = endTime - startTime
        basic.showNumber(timeTaken)
        basic.pause(5000)
        running = 0
    } else {
        progressImg()
    }
})
