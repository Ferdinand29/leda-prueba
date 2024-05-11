input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.showIcon(IconNames.Heart)
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.SmallHeart)
})
