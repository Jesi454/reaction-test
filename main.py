def progressImg():
    global num
    num += 1
    num = num % 2
timeTaken = 0
endTime = 0
startTime = 0
start = 0
running = 0
num = 0
num = 0
goImg = images.create_image("""
    # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
""")
Img2 = images.create_image("""
    . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
""")
img3 = images.create_image("""
    . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
""")
images2 = [goImg, Img2, img3]

def on_forever():
    global start, running, startTime, endTime, timeTaken, num
    if not (running):
        start = randint(0, 10)
        if start == 1:
            running = 1
            images2[num].show_image(0)
            startTime = input.running_time()
    if input.button_is_pressed(Button.B):
        endTime = input.running_time()
        timeTaken = endTime - startTime
        basic.show_number(timeTaken)
        basic.pause(5000)
        running = 0
        num = 0
    else:
        progressImg()
basic.forever(on_forever)
