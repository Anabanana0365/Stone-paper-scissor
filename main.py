def on_button_pressed_a():
    if input.button_is_pressed(Button.A):
        pass
    elif Math.random_boolean():
        basic.show_icon(IconNames.SCISSORS)
    elif Math.random_boolean():
        basic.show_icon(IconNames.SMALL_SQUARE)
    else:
        basic.show_icon(IconNames.SQUARE)
input.on_button_pressed(Button.A, on_button_pressed_a)
