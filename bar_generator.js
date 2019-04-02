let octave = 0
let key = 0
let bar: number[] = []
let note = 0
let circleoffifth: number[] = []
let index = 0

index = 0
circleoffifth = [0, 7, 2, 9, 4, 11, 6, 1, 8, 3, 10, 5, 7, 2]
bar = [0, 0, 0, 0, 0, 0, 0, 0]
key = Math.randomRange(0, 10)
octave = 3
makeBar2()

function makeBar2() {
    for (let index2 = 0; index2 <= 7; index2++) {
        bar[index2] = Math.randomRange(0, 3)
    }
}

input.onButtonPressed(Button.A, function () {
    makeBar2()
})

basic.forever(function () {
    for (let index3 = 0; index3 <= 7; index3++) {
        note = bar[index3]
        if (note != 3) {
            note = note + (key + octave * 12)
            serial.writeString("0.5" + "," + note + "," + "1")
        }
        control.waitMicros(100)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # . # .
            # . . . #
            `)
        control.waitMicros(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
