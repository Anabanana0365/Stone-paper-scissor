input.onButtonPressed(Button.A, function on_button_pressed_a() {
    if (input.buttonIsPressed(Button.A)) {
        
    } else if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Scissors)
    } else if (Math.randomBoolean()) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
    
})
