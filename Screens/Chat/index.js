
import {Text,View,StyleSheet} from  'react-native';


import React from 'react'

export const Chat = () => {
  return (
    <>
        <View style={styles.container}>
            <Text>Chat Screen</Text>
        </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


