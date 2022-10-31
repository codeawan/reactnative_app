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
    RefreshControl,
  } from 'react-native';
import {Appbar, List, Title, Card, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const LatestPost = ({navigation})=>{
    const [articles, setArticles] = useState([]);
    const [loader, setLoader] = useState('flex');
    const [loadMoreLoader, setLoadMoreLoader] = useState('none');
    const [loadMoreButton, setLoadMoreButton] = useState('flex');
    const [refreshing, setRefreshing] = useState(false);
    const [page, setPage] = useState(1);

    const onRefresh = () => {
      setRefreshing(true);
    };

    const fetchArticles = (pageNum)=>{
      axios.get("https://hindisoch.com/wp-json/wp/v2/posts", { params: {      
        per_page: 10,
        page: pageNum,
        _embed: true,
      }})
      .then(response => { 
        setLoader('none');
        setRefreshing(false);
        setLoadMoreLoader('none');
        setLoadMoreButton('flex');
        setArticles(response.data);
      })
      .catch(error => {
          //console.log(error);
      });      
    }

    const fetchMore = (pageNum)=>{
      setLoadMoreLoader('flex');
      setLoadMoreButton('none');
      axios.get("https://www.hindisoch.com/wp-json/wp/v2/posts", { params: {      
        per_page: 10,
        page: pageNum,
        _embed: true,
      }})
      .then(response => { 
        setPage(pageNum);
        setLoadMoreLoader('none');
        setLoadMoreButton('flex');
        let articleData = [...articles, ...response.data];
        setArticles(articleData);
      })
      .catch(error => {
        setLoadMoreLoader('none');
        setLoadMoreButton('none');
        //console.log(error);
      });      
    }

    useEffect(()=>{
      setArticles([]);
      setPage(1);
      fetchArticles();
    }, [refreshing]);

    return(
      <>
      <View style={{flex:1, justifyContent: "center", display:loader}}>
      <ActivityIndicator size="large" color="#061d6f" />
      </View>

        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        {
          (articles.length > 1) ?
          articles.map((article, key)=>{
            const imgUrl = (article._embedded['wp:featuredmedia'] === undefined) ? 
              require('./img/default-featured-image.jpg')
            : 
            {
              uri: article._embedded['wp:featuredmedia'][0].source_url,
            };
            
            return (
            <View style={styles.card} key={key+20}>
            <TouchableOpacity onPress={()=>navigation.navigate('Article', 
            {
            title: article.title.rendered,
            content: article.content.rendered,
            url: article.link,
            }
            )} >
            <Image key={key+10} 
            source={imgUrl}
            style={{width: null, height: 300}}
            />
            </TouchableOpacity>
            <Title onPress={()=>navigation.navigate('Article', 
            {
            title: article.title.rendered,
            content: article.content.rendered,
            url: article.link,
            }
            )} style={styles.homeArticleTitle} key={key}>
            {entities.decode(article.title.rendered)}
            </Title> 
            </View>
            ) 
          })
          :
          <Text></Text>
        }
        {
          (articles.length > 1) ? <Button style={{display:loadMoreButton, borderRadius:0}} mode="contained" color="#061d6f" onPress={()=>fetchMore(page+1)}>Load More..</Button> : <Text></Text>
        }
          <View style={{flex:1, justifyContent: "center", display:loadMoreLoader}}>
          <ActivityIndicator size="large" color="#061d6f" />
          </View>       
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    card:{
      marginBottom:30,
      marginTop:30,
      marginLeft:10,
      marginRight:10,
      borderWidth:1,
      borderColor:'#e8e6e6',
      paddingBottom:10,
    },
    homeArticleTitle:{
      paddingLeft:10,
      fontSize:21,
    },
    loader:{
      flex: 1,
      justifyContent: "center",
    }
  });

export default LatestPost;