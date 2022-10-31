import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
  } from 'react-native';
import {Appbar, List, Title, Card, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation})=>{

  const [loader, setLoader] = useState('flex');

    return(
      <>
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#061d6f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        alignSelf: 'center'
      },
    }}
    initialRouteName="Home">
        <Drawer.Screen name="Home" options={{ title: 'Home' }} component={Home} />
    </Drawer.Navigator>
      </>
    );
}

const styles = StyleSheet.create({
    images:{
      width: null, 
      height: 250,
    },
    card:{
      marginTop:10,
    },
    loader:{
      flex: 1,
      justifyContent: "center",
    }
  });

export default HomeScreen;