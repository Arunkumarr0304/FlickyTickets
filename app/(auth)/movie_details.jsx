import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Movie from "../../assets/images/Slider1.png";
import Heart from "../../assets/images/empty_heart.svg";
import Empty from "../../assets/images/red_heart.svg";
import Imdb from "../../assets/images/imdb.svg";
import { cast_data, crew_data, tabs } from '../../components/Data/Data';
import Button from "../../components/Button/Button";
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Movie_details = () => {
  const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
  const [inWishlist, setInWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const toggleWishlist = () => {
    setInWishlist(!inWishlist);
  };

  const Book = () => {
    router.push('seat');
  };

  const back = () => {
    router.push('home');
  };

  const renderData = activeTab === 1 ? cast_data : crew_data;

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
        <Text style={[styles.heading, {color: theme.color}]}>Turning Red</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.image_box}>
        <Image source={Movie} alt='image' style={styles.image} />
      </View>
      <View style={[styles.detail_container, {backgroundColor: theme.coloring}]}>
        <View style={styles.detail_top}>
          <Text style={[styles.movie_name, {color: theme.color}]}>Turning Red</Text>
          <TouchableOpacity style={styles.wishlist} onPress={toggleWishlist}>
            {inWishlist ? <Empty /> : <Heart />}
          </TouchableOpacity>
        </View>
        <View style={styles.detail_bottom}>
          <Text style={[styles.theater_details, {color: theme.color}]}>2 hrs 15mins English IMAX</Text>
          <View style={styles.imdb_row}>
            <Imdb />
            <Text style={[styles.rating_row, {color: theme.color}]}>8.1<Text style={styles.rating}>/10</Text></Text>
          </View>
        </View>
      </View>
      <Text style={[styles.synopsis_header, {color: theme.color}]}>Synopsis</Text>
      <Text style={styles.synopsis}>Frank Moses, a retired black-ops CIA agent, enjoys a quiet suburban life, disrupted only by phone calls with Sarah Ross, a pension office worker<Text style={styles.read}> Read More..</Text></Text>
      <View style={styles.tab_container}>
        {
          tabs.map((d) => (
            <TouchableOpacity style={styles.tab} key={d.id} onPress={() => setActiveTab(d.id)}>
              <Text style={[styles.tab_text, activeTab === d.id && styles.active_tab_text, {color: theme.color}]}>{d.text}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
      <ScrollView horizontal={true} style={styles.cast_container}>
        {
          renderData.map((d) => (
            <TouchableOpacity style={styles.cast_box} key={d.id}>
              <Image source={d.image} alt='image' style={styles.cast_image} />
              <Text style={[styles.cast_name, {color: theme.color}]}>{d.text}</Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <View style={styles.button_box}>
      <Button buttonText="Book Tickets" onPress={Book} />
      </View>
      </ScrollView>
    </View>
  );
}

export default Movie_details;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  image_box: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 10,
  },
  detail_container: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 10,
    gap: 10,
  },
  detail_top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movie_name: {
    fontSize: 22,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
  },
  wishlist: {

  },
  detail_bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imdb_row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  synopsis_header: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
    marginTop: 20,
    marginBottom: 8,
  },
  synopsis: {
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Lato_400Regular',
    color: '#757575',
  },
  read: {
    color: '#FF6F6C',
  },
  tab_container: {
    marginVertical: 20,
    flexDirection: 'row',
  },
  tab: {
    marginRight: 20,
  },
  tab_text: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Montserrat_700Bold',
    color: '#BABABA',
    textTransform: 'capitalize',
  },
  active_tab_text: {
    color: '#121212',
  },
  cast_container: {
    marginBottom: 20,
  },
  cast_box: {
    marginRight: 20,
    alignItems: 'center',
  },
  cast_image: {
    width: 120,
    height: 120,
  },
  cast_name: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: 'Lato_700Bold',
    color: '#121212',
  },
  button_box: {
    marginBottom: 90,
  }
});
