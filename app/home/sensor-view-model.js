import { fromObject, Observable } from '@nativescript/core'
import { startAccelerometerUpdates } from "nativescript-accelerometer"

export function SensorViewModel() {
  const viewModel = new Observable()
  viewModel.x = 10
  viewModel.y = 20
  viewModel.z = 30

  //whenever the position of the emulator/device changes, the function defined below is called
  //function with which we display these changes on the screen
  var accelerometer = require("nativescript-accelerometer")
  accelerometer.startAccelerometerUpdates(function(data) {
    viewModel.set('x', data.x)
    viewModel.set('y', data.y)
    viewModel.set('z', data.z)
  }, { sensorDelay: "ui" })
  
  return viewModel
}