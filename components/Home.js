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

const Home = ({navigation})=>{

  const [loader, setLoader] = useState('flex');

    return(
      <>
      <ScrollView>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 99
        })}>
        <Image 
        source={require('./img/hindi-story.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 449
        })}>
        <Image 
        source={require('./img/hindi-quotes.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 686
        })}>
        <Image 
        source={require('./img/hindi-shayari.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 116
        })}>
        <Image 
        source={require('./img/hindi-poem.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
        <Image 
        source={require('./img/moral-story.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 559
        })}>
        <Image 
        source={require('./img/biography.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 589
        })}>
        <Image 
        source={require('./img/hindi-facts.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 713
        })}>
        <Image 
        source={require('./img/good-morning.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 690
        })}>
        <Image 
        source={require('./img/whatsapp-status.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 679
        })}>
        <Image 
        source={require('./img/god-wallpaper.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 626
        })}>
        <Image 
        source={require('./img/health-tips.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('ArticleList', {
          category: 617
        })}>
        <Image 
        source={require('./img/technical.jpg')}
        style={styles.images}
        />
        </TouchableOpacity>
      </ScrollView>
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

export default Home;