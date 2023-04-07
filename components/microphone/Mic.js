// Create a microphone component to turn on/of the microphone

import React, {useState,useEffect} from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export const Mic = () => {
    const [hasPermission,setHasPermission] =useState(null);
    const [recording,setRecording] =useState(null);
    const [sound,setSound] =useState(null);
    const [isRecording,setIsRecording] =useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Audio.getPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }
    , []);

    const startRecording = async () => {
        try {
            const { recording } = await Audio.Recording.createAsync();
            setRecording(recording);
            await Audio.setAudioModeAsync()
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    const stopRecording = async () => {
        setRecording(undefined);
        await recording.stopAndUnloadAsync();
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
        })
        const { sound } = await recording.createNewLoadedSoundAsync();
        setSound(sound);
        console.log('Recording stopped and stored at', recording.getURI());
    }


    const onRecordPressed = () => {
        if (recording) {
            stopRecording();
        } else {
            startRecording();
        }
    }

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <View> No access to microphone </View>;
    }

    return (
        <View >
            <TouchableOpacity
                onPress={onRecordPressed}
            >
                <FontAwesome name="microphone" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

// Create a style sheet
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 50,
        padding: 15,
        elevation: 2,
        alignSelf: 'center',
    },
    icon: {
        fontSize: 35,
        color: 'red',
    },
});