import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import PushNotifications from './services/PushNotifications';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';
import HomeTabScreen from './components/HomeTabScreen';
import Article from './components/Article';
import ArticleList from './components/ArticleList';

import {AdMobBanner} from 'react-native-admob';


const Stack = createStackNavigator();

const App: () => React$Node = () => {

  const onFailToRecieveAd = (error) => console.log(error);

  return (
    <>
    <StatusBar backgroundColor="#061d6f" barStyle='light-content' />
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#061d6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          alignSelf: 'center'
        },
      }}
      >
        <Stack.Screen name="HomeTabScreen" options={{ title: 'HindiSoch.com' }} component={HomeTabScreen} />
        <Stack.Screen name="ArticleList" options={{ title: 'HindiSoch.com' }} component={ArticleList} />
        <Stack.Screen name="Article" options={{ title: 'HindiSoch.com' }} component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
    <View style={{display:'flex', borderWidth: 1, borderColor: '#eee', marginTop:5, }}>
    <AdMobBanner
          adSize="largeBanner"
          adUnitID="ca-app-pub-7613856299029964/3133079585"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={onFailToRecieveAd}
    />
    </View>
    <PushNotifications />
    </>
  ); 
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default App;
