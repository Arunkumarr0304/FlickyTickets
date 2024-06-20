import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';

const Add_new = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Back />
            <Text style={styles.heading}>Add New Card</Text>
        </View>
    </View>
  )
}

export default Add_new;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    }
})