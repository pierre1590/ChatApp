// Creare una pagine iniziale con una bottom bar che mi riporti al Profilo utente, alle chat e alla video chat.

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import {Profile} from "./Screens/Profile/index.js";
import {Chat} from "./Screens/Chat/index.js";
import {VideoChat} from "./Screens/VideoChat/index.js";
import {Colors} from "./costants/color";
import { FontAwesome } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

const HomePage = () => {
  return (
    <>

    
    <StatusBar style='light'/>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Profilo utente"
        screenOptions={{
          activeTintColor: Colors.secondary,
          inactiveTintColor: Colors.primary,
          tabBarStyle: {
            backgroundColor: Colors.grey,
            height: 80,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5,
            marginHorizontal:18,
            marginVertical:5,
          },
          headerStyle:{
            backgroundColor: Colors.primary,
            height: 80,
          },
          headerTitleStyle:{
            color: Colors.white,
            fontSize: 20,
            fontWeight: "bold",
          },
          headerShown:false,
          tabBarBadgeStyle:{
            backgroundColor: Colors.secondary,
            color: Colors.white,
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarIconStyle:{
            marginTop: 10,
            fontSize:18,
          },
          tabBarShowLabel:false,
          
        }}
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="wechat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profilo utente"
          component={Profile}
          options={{
            tabBarLabel: "Profilo utente",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Video chat"
          component={VideoChat}
          options={{
            tabBarLabel: "Video chat",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="video-camera" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </>
  );
};

export default HomePage;
