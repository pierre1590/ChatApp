// Create a component to stream the video of the webcam and return it to the browser

// Path: components\camera\Camera.js

import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import { Camera } from "expo-camera";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "../../costants/color";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Mic} from '../microphone/Mic.js';


export const CameraComponent = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    

    //State of the camera on/off
    const [cameraOn, setCameraOn] = useState(false);


    

 
    // Check if the user has granted permission to use the camera
    useEffect(() => {
        (async () => {
            const { status } = await Camera.getCameraPermissionsAsync();
            setHasPermission(status === "granted");
        })();
    }, []);



    if (hasPermission === null) {
        return <View style={styles.display}/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }




    

    return (
        <View style={styles.container}>
            {/*If the camera is on, display the video stream*/}
            {cameraOn ? (
                <Camera style={styles.camera} type={type}/>
            ):(
                <View style={styles.display}>
                    <MaterialCommunityIcons name={"camera-off"} size={50} color={Colors.white} />
                </View>
            )}
            <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}
                    >
                        <Ionicons name="ios-camera-reverse" size={38} color={Colors.dark} />
                    </TouchableOpacity>
                    {/*Button to toggle camera, if the camera is on turned off the display is black*/}
                   
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setCameraOn(!cameraOn);
                        }}
                    >
                        <MaterialCommunityIcons name={cameraOn ? "camera" : "camera-off"} size={35} color={Colors.dark} />
                    </TouchableOpacity>
                    <Mic />
                </View>
           
        </View>
    );
};



// Create a style sheet with buttons of camera and microphone on bottom at center
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 0.05,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        
    },
    button: {
        flex:1,
        alignSelf: 'flex-end',
        alignItems: 'left',
    },
    display:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.dark,
    },
    text: {
        alignSelf:'auto',
        fontSize: 18,
        color: Colors.white,
    },
    

});
