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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Category from './Category';
import LatestPost from './LatestPost';


const Tab = createMaterialTopTabNavigator();

const HomeTabScreen = ({navigation})=>{

  const [loader, setLoader] = useState('flex');

    return(
      <>
      <Tab.Navigator initialRouteName="Latest"
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Latest') {
                iconName = focused
                  ? 'flash'
                  : 'flash-outline';
                color = '#061d6f';
              } else if (route.name === 'Category') {
                iconName = focused ? 'reader' : 'reader-outline';
                color = '#061d6f';
              }
  
              // You can return any component that you like here!
              return <Ionicons style={{marginTop:-5}} name={iconName} size={25} color={color} />;
            },
        })}
        tabBarOptions={{
            labelStyle: { fontWeight: 'bold',},
            showIcon: true,
            style:{height:65, },
        }}
      >
        <Tab.Screen name="Latest" component={LatestPost} />
        <Tab.Screen name="Category" component={Category} />
      </Tab.Navigator>
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

export default HomeTabScreen;