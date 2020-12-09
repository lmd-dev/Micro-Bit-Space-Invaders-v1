function afficherPixels () {
    for (let index = 0; index <= 24; index++) {
        x3 = index % 5
        y3 = index / 5
        if (pixels[index] != 0) {
            led.plot(x3, y3)
        } else {
            led.unplot(x3, y3)
        }
    }
}
input.onButtonPressed(Button.A, function () {
    allerAGauche()
})
function animerAsteroids () {
    if (iterations % 10 == 0) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (pixels[matrixToIndex(x, 4 - y)] == 3) {
                    pixels[matrixToIndex(x, 4 - y)] = 0
                    pixels[matrixToIndex(x, 4 - y + 1)] = 3
                }
            }
        }
    }
}
function tirer () {
    pixels[matrixToIndex(positionVaisseau, 3)] = 2
}
function allerADroite () {
    pixels[matrixToIndex(positionVaisseau, 4)] = 0
    positionVaisseau = Math.constrain(positionVaisseau + 1, 0, 4)
    pixels[matrixToIndex(positionVaisseau, 4)] = 1
}
input.onButtonPressed(Button.AB, function () {
    tirer()
})
function creerAsteroide () {
    if (iterations % 15 == 0) {
        pixels[matrixToIndex(randint(0, 4), 0)] = 3
    }
}
input.onButtonPressed(Button.B, function () {
    allerADroite()
})
function allerAGauche () {
    pixels[matrixToIndex(positionVaisseau, 4)] = 0
    positionVaisseau = Math.constrain(positionVaisseau - 1, 0, 4)
    pixels[matrixToIndex(positionVaisseau, 4)] = 1
}
function matrixToIndex (x: number, y: number) {
    return y * 5 + x
}
function animerMissiles () {
    for (let y2 = 0; y2 <= 4; y2++) {
        for (let x2 = 0; x2 <= 4; x2++) {
            if (pixels[matrixToIndex(x2, y2)] == 2) {
                pixels[matrixToIndex(x2, y2)] = 0
                pixels[matrixToIndex(x2, y2 - 1)] = 2
            }
        }
    }
}
let y3 = 0
let x3 = 0
let pixels: number[] = []
let positionVaisseau = 0
let iterations = 0
iterations = 0
positionVaisseau = 2
pixels = []
for (let index = 0; index < 25; index++) {
    pixels.unshift(0)
}
pixels[20 + positionVaisseau] = 1
basic.forever(function () {
    afficherPixels()
    animerMissiles()
    animerAsteroids()
    creerAsteroide()
    basic.pause(100)
    iterations += 1
})
