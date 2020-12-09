def afficherPixels():
    global x, y
    for index in range(25):
        x = index % 5
        y = index / 5
        if pixels[index] != 0:
            led.plot(x, y)
        else:
            led.unplot(x, y)

def on_button_pressed_a():
    allerAGauche()
input.on_button_pressed(Button.A, on_button_pressed_a)

def tirer():
    pixels[matrixToIndex(positionVaisseau, 3)] = 2
def allerADroite():
    global positionVaisseau
    pixels[matrixToIndex(positionVaisseau, 4)] = 0
    positionVaisseau = Math.constrain(positionVaisseau + 1, 0, 4)
    pixels[matrixToIndex(positionVaisseau, 4)] = 1

def on_button_pressed_b():
    allerADroite()
input.on_button_pressed(Button.B, on_button_pressed_b)

def allerAGauche():
    global positionVaisseau
    pixels[matrixToIndex(positionVaisseau, 4)] = 0
    positionVaisseau = Math.constrain(positionVaisseau - 1, 0, 4)
    pixels[matrixToIndex(positionVaisseau, 4)] = 1
def matrixToIndex(x: number, y: number):
    return y * 5 + x
y = 0
x = 0
pixels: List[number] = []
positionVaisseau = 0
positionVaisseau = 2
pixels = []
for index2 in range(25):
    pixels.unshift(0)
pixels[20 + positionVaisseau] = 1

def on_forever():
    afficherPixels()
basic.forever(on_forever)
