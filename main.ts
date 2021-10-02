basic.forever(function () {
    pins.analogWritePin(AnalogPin.P0, pins.analogReadPin(AnalogPin.P8))
    basic.showIcon(IconNames.House)
})
