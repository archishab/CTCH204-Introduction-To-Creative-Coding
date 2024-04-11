# Arduino Dinosaur Game

This project recreates a simple version of the classic "Chrome Dinosaur Game" on an Arduino, utilizing an OLED display for visuals and physical buttons for game controls. The game features a dinosaur that must jump over obstacles to earn points. The project is not only fun but also a great learning tool for understanding the basics of Arduino programming, handling inputs/outputs, and working with displays.

## Features

- **Smooth Animations:** Walking dinosaur and scrolling backgrounds.
- **Interactive Menus:** For game control and interactions like feeding the dinosaur.
- **Sound Feedback:** Uses a piezo speaker for auditory signals during the game.
- **Obstacle Avoidance:** Jump over obstacles to survive and score points.
- **Scoring System:** Points based on survival time and number of obstacles passed.
- **Stat Tracking:** Monitors dinosaur's hunger, happiness, and health.

## Components

- Arduino Uno
- 0.96 inch (128 x 64 px) I2C OLED Display
- Piezo Speaker
- 3 x Push Buttons
- Breadboard and Jumper Wires
- USB Cable for programming and power supply

## Circuit Diagram
[pinout](https://github.com/archishab/CTCH204-Introduction-To-Creative-Coding/blob/main/arduino/1.%20Project/Pinout.png)


- **Display to Arduino:** Connect the OLED display via the I2C protocol. Typically, SDA goes to A4, and SCL goes to A5 on an Arduino Uno.
- **Buttons Setup:** Connect each button to a digital pin (specified in code) with a pull-up resistor setup.
- **Speaker Setup:** Connect the piezo speaker to the specified pin for sound output.

## Installation

1. **Arduino IDE:**
   - Download and install the Arduino IDE from [Arduino's official site](https://www.arduino.cc/en/Main/Software).

2. **Libraries:**
   - You need to install the `Adafruit_SSD1306` library and its dependencies (`Adafruit_GFX`). Manage libraries through the IDE's "Manage Libraries" menu.

3. **Wiring:**
   - Set up your components on the breadboard and connect them to the Arduino according to the circuit diagram.

4. **Programming:**
   - Open the Arduino IDE, select the correct board and port.
   - Open the provided code and upload it to the Arduino board.

## Usage

- **Starting the Game:**
  - Press Button 2 to start the game from the main menu.
- **Playing the Game:**
  - Use Button 1 to make the dinosaur jump over obstacles.
  - The game speeds up and becomes more difficult as your score increases.
- **Accessing the Menu:**
  - Press Button 3 to pause the game and bring up the menu for settings and stats.
- **Game Over:**
  - The game ends if the dinosaur collides with an obstacle. The score will be displayed, and you can restart the game by pressing Button 2.

## Troubleshooting

- **Display Issues:** Ensure that the OLED display is correctly connected and recognized over the I2C bus.
- **Button Response:** If buttons are unresponsive, check for loose connections or replace the pull-up resistors.
- **Unexpected Resets:** Frequent resets can be due to power issues or memory overflow due to extensive debug prints.