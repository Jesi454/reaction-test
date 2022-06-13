function progressImg () {
    num += 1
    num = num % 4
    images2[num].showImage(0)
}
input.onButtonPressed(Button.A, function () {
    if (fastestTime == 0) {
        basic.showString("CHEATER")
    } else {
        basic.showNumber(fastestTime)
    }
})
let timeTaken = 0
let endTime = 0
let startTime = 0
let start = 0
let fastestTime = 0
let images2: Image[] = []
let num = 0
num = 0
let running = 0
let goImg = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
let Img2 = images.createImage(`
    . . . # .
    # . # . .
    . # # # .
    . . # . #
    . # . . .
    `)
let img3 = images.createImage(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
let img4 = images.createImage(`
    . # . . .
    . . # . #
    . # # # .
    # . # . .
    . . . # .
    `)
images2 = [
goImg,
Img2,
img3,
img4
]
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
        timeTaken = (endTime - startTime) % 1000 % 60
        basic.showNumber(timeTaken)
        basic.pause(5000)
        if (timeTaken > fastestTime) {
            fastestTime = timeTaken
        }
        num = 0
        running = 0
    } else {
        progressImg()
    }
})
