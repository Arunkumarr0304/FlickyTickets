import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, StatusBar } from 'react-native';
import React, { useContext, useState } from 'react';
import Swiper from 'react-native-swiper';
import profile from "../../assets/images/home_profile.png";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Notification from "../../assets/images/notification.svg";
import Search from "../../assets/images/search.svg";
import Mic from "../../assets/images/mic.svg";
import { recommend_data, slider_data } from '../../components/Data/Data';
import Imdb from "../../assets/images/imdb.svg";
import Upcoming from '../../components/Upcoming/Upcoming';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Home = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const details = () => {
    router.push('movie_details');
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
        <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle={darkMode ? "light-content" : "dark-content"} 
      />
      <View style={styles.header}>
        <View style={styles.header_left}>
          <Image style={styles.image} source={profile} alt='image' />
          <View style={styles.header_content}>
            <Text style={styles.heading}>Welcome Back,</Text>
            <Text style={[styles.name, {color: theme.color}]}>Minato Namikaza</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notification}>
          <Notification />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.input_container}>
        <View style={styles.search}>
          <Search />
        </View>
        <TextInput style={[styles.input, {backgroundColor: theme.coloring, color:theme.color}]} placeholder='Search' />
        <View style={styles.mic}>
          <Mic />
        </View>
      </View>
      <View style={styles.swiperContainer}>
        <Swiper
          style={styles.swiper}
          loop={false}
          onIndexChanged={(index) => setCurrentIndex(index)}
          paginationStyle={styles.paginationStyle}
          dotStyle={[styles.dotStyle, {backgroundColor: theme.color}]}
          activeDotStyle={styles.activeDotStyle}
        >
          {
            slider_data.map((d) => (
              <View style={styles.swipper_box} key={d.id}>
                <Image source={d.image} alt='image' style={styles.swipper_image} />
                <Text style={styles.upcoming}>{d.upcoming}</Text>
                <View style={styles.bottom_content}>
                  <View style={styles.bottom_left}>
                    <Text style={styles.movie_name}>{d.movie}</Text>
                    <Text style={styles.timing}>{d.movie_timing}</Text>
                  </View>
                  <TouchableOpacity style={styles.book_now}>
                    <Text style={styles.book}>{d.book}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          }
        </Swiper>
      </View>
      <View style={styles.recommend_header}>
        <Text style={[styles.rec_heading, {color: theme.color}]}>Recommended Movies</Text>
        <Text style={styles.see_all}>see all</Text>
      </View>
      <ScrollView horizontal={true} style={styles.recommend_container}>
        {
          recommend_data.map((d) => (
            <TouchableOpacity style={styles.recommend_box} key={d.id} onPress={details}>
              <Image source={d.image} alt='image' style={styles.rec_image} />
              <View style={styles.content}>
                <Text style={[styles.rec_movie_name, {color: theme.color}]}>{d.name}</Text>
                <View style={styles.rec_content_right}>
                <Imdb />
                <Text style={[styles.rating, {color: theme.color}]}>{d.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <Upcoming />
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header_left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 50,
    height: 50,
  },
  header_content: {

  },
  heading: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
  },
  name: {
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  notification: {
    borderRadius: 8,
    backgroundColor: "#FF8482",
    padding: 7,
  },
  input_container: {
    marginVertical: 25,
  },
  input: {
    borderRadius: 10,
    backgroundColor: '#F6F6F6',
    paddingVertical: 16,
    paddingHorizontal: 40,
    position: 'relative',
  },
  search: {
    position: 'absolute',
    zIndex: 100,
    bottom: 18,
    left: 10,
  },
  mic: {
    position: 'absolute',
    zIndex: 100,
    bottom: 18,
    right: 10,
  },
  swiperContainer: {
    maxHeight: 250,
    height: 250,
  },
  swiper: {
    height: 250,
  },
  paginationStyle: {
    bottom: 10, 
  },
  swipper_box: {
    alignItems: 'center', 
  },
  swipper_image: {
    width: 300,
    height: 180,
  },
  upcoming: {
    fontSize: 10,
    lineHeight: 10,
    fontFamily: 'Montserrat_700Bold',
    color: '#ffffff',
    backgroundColor: '#1C31A5',
    borderRadius: 5,
    padding: 8,
    maxWidth: 109,
    position: 'absolute',
    left: 18,
    top: 8,
  },
  bottom_content: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 300,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottom_left: {
    gap: 1,
  },
  movie_name: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'Montserrat_600SemiBold',
    color: '#ffffff',
  },
  timing: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
    color: '#ffffff',
  },
  book: {
    fontSize: 10,
    lineHeight: 10,
    fontFamily: 'Montserrat_400Regular',
    color: '#ffffff',
    borderRadius: 5,
    backgroundColor: '#1C31A5',
    padding: 3,
    textTransform: 'capitalize',
  },
  book_now: {
    borderRadius: 5,
    backgroundColor: '#1C31A5',
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: '#FF8482',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  recommend_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 20,
  },
  rec_heading: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  see_all: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
    color: '#FF8482',
    textTransform: 'capitalize',
  },
  recommend_container: {
  marginTop: 24,
  },
  recommend_box: {
    marginRight: 20,
  },
  rec_image: {
    width: 160,
    height: 240,
    borderRadius: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  rec_movie_name: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_700Bold',
    color: "#121212",
  },
  rating: {
    fontSize: 10,
    lineHeight: 12,
    fontFamily: 'Lato_400Regular',
    color: '#121212',
  },
  rec_content_right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  }
});
