import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import news_banner_data from './news_banner_data.json';

function App() {

  const renderNews = ({item}) => <NewsCard news = {item}/>;
  const keyNews = (item, index) => item.id.toString();

  return(
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.headerContainer}>PATIKASTORE</Text>
      <FlatList  
        /*ListHeaderComponent = {() => 
        <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
        {news_banner_data.map(banner_news => <Image style = {styles.banner_image} source = {{uri: banner_news.imageUrl}}></Image>)}
        </ScrollView>}*/
        numColumns = {2}
        columnWrapperStyle={styles.row}
        keyExtractor = {keyNews}
        data = {news_data}
        renderItem = {renderNews}/>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width,
  },

  row: {
    flex: 5,
    justifyContent: "space-around",
        borderRadius: 10,
        width: "100%",
  },

  headerContainer: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 34,
    color: 'purple',
    textAlign: 'center',
  }
})

export default App;
