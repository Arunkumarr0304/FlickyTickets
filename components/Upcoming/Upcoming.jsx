import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Browse from "../../assets/images/browse.svg";
import { Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import inner from "../../assets/images/browse_inner.png";

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
    }
})