import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CameraComponent } from '../../components/camera/Camera'


// Return the video of the webcam in the app

export const VideoChat = () => {
  return (
    
      <CameraComponent />
    
  )
}

// Create a style sheet 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})


