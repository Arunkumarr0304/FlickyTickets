import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import screen from "../../assets/images/screen.png";

const Seat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back />
        <Text style={styles.heading}>Select Seat</Text>
      </View>
      <View style={styles.image_box}>
      <Image source={screen} alt='image' style={styles.image} />
      </View>
    </View>
  )
}

export default Seat;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
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
        textTransform: 'capitalize',
    },
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
    },
    image: {
        width: 320,
    }
})