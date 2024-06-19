import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { recommend_data } from '../../components/Data/Data';
import Imdb from "../../assets/images/imdb.svg";

const Favourite = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>My Favorite</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View horizontal={true} style={styles.recommend_container}>
        {
          recommend_data.map((d) => (
            <TouchableOpacity style={styles.recommend_box} key={d.id}>
              <Image source={d.image} alt='image' style={styles.rec_image} />
              <View style={styles.content}>
                <Text style={styles.rec_movie_name}>{d.name}</Text>
                <View style={styles.rec_content_right}>
                <Imdb />
                <Text style={styles.rating}>{d.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
      </ScrollView>
    </View>
  )
}

export default Favourite;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#121212',
    textTransform: 'capitalize',
  },
  recommend_container: {
    marginTop: 24,
    marginBottom: 60,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    },
    recommend_box: {
    
    },
    rec_image: {
      width: 140,
      height: 200,
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
    rec_content_right: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 5,
    },
    rating: {
      fontSize: 10,
      lineHeight: 12,
      fontFamily: 'Lato_400Regular',
      color: '#121212',
    },
})