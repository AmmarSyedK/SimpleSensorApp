![NS Banner](https://i.ibb.co/tD2MFrz/Sans-titre-33.png)
# NativeScript Project - Sensor App

This is a simple NativeScript project where I had to code an App using the sensor (Accelerometer in NativeScript).

# Result

The final result will display a customized text and background color depending on the movement of the phone user.

Here is a demo:

https://user-images.githubusercontent.com/76450681/213923933-2e80257a-2f86-4740-ab85-eb0b2eef6c04.mp4

In order to get these results, we simply have some if conditions depending on the x, y and z-axis of the sensor.

Simply explained:
- If x > 0 then the device is going to the right. The screen will display the text : "RIGHT" with a green background color. 
- If x<0 then it will display "LEFT" with a red background color.
- Same thing for the y and z-axis.

Note: The app is a bit buggy at the end of each movement, for example it will print LEFT at the end of a movement to the RIGHT and then going back to STILL. It is because the sensor is not a hundred percent accurate.

# Credits

- NativeScript Sensor Tutorial from Matea Turalija (https://hackmd.io/@mateaturalija/r1_zhHh_o)
- NativeScript Docs: https://nativescript.org/ 


