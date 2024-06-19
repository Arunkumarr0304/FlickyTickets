import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Browse from "../../assets/images/browse.svg";
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import inner from "../../assets/images/browse_inner.png";
import { upcoming_data } from '../Data/Data';
import Imdb from "../../assets/images/imdb.svg";

const Upcoming = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.browse_box}>
            <Browse />
            <View style={styles.browse_content}>
                <Text style={styles.browse_head}>Browse by Cinemas</Text>
                <Text style={styles.browse_text}>See what’s playing in cinemas near you</Text>
            </View>
            <Image source={inner} alt='image' style={styles.image} />
      </TouchableOpacity>
      <View style={styles.recommend_header}>
        <Text style={styles.rec_heading}>Recommended Movies</Text>
        <Text style={styles.see_all}>see all</Text>
      </View>
      <ScrollView horizontal={true} style={styles.recommend_container}>
        {
          upcoming_data.map((d) => (
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
      </ScrollView>
    </View>
  )
}

export default Upcoming;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginTop: 20,
    },
    browse_box: {
        borderColor: '#BABABA',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    browse_content: {
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    browse_head: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#121212',
    },
    browse_text: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Lato_400Regular',
        color: '#FF8482',
    },
    image: {
        position: 'absolute',
        bottom: 3,
        width: 80,
        height: 55,
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
})