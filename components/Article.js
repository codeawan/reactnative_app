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
    Linking,
    ActivityIndicator,
    Share,
  } from 'react-native';
import {Appbar, List, Title, Card, Button } from 'react-native-paper';
import HTML from 'react-native-render-html';

import {AdMobBanner} from 'react-native-admob';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const Article = ({route, navigation})=>{

  const { title , content, url} = route.params;

  const onFailToRecieveAd = (error) => console.log(error);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: title+' - '+url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

    return(
      <>
      <ScrollView style={styles.card}>
        <Title style={styles.articleTitle}>{entities.decode(title)}</Title>

        <View>
        <AdMobBanner
          adSize="mediumRectangle"
          adUnitID="ca-app-pub-7613856299029964/1616817937"
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />
        </View>

        <HTML 
        tagsStyles={{ p:styles.paragraph, div:styles.paragraph }}
        classesStyles={{ googlebox:styles.googlebox, }}
        textSelectable={true}
        html={content} imagesMaxWidth={Dimensions.get('window').width} ignoredStyles={['height','width']}
        onLinkPress={(evt, href) => { Linking.openURL(href); }}
        />
        <Button style={{borderRadius:0, marginBottom:10}} icon="share" mode="contained" onPress={onShare}>Share</Button>
      </ScrollView>
      </>
    );

}


const styles = StyleSheet.create({
  card:{
    marginTop:30,
    marginLeft:10,
    marginRight:10,
    paddingBottom:10,
  },
  articleTitle:{
    fontSize:22,
    marginBottom:20,
  },
  paragraph:{
    marginTop:10,
    marginBottom:10,
    fontSize:20
  },
  googlebox:{
    borderWidth:1,
    borderColor:'#bfbfbf',
    borderTopWidth:2,
    borderTopColor:'#00ACC1',
    borderRadius:8,
    textAlign:'center',   
    paddingTop:30,
    paddingBottom:30   
  }
});
  
export default Article;