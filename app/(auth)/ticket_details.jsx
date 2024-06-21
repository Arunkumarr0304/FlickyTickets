import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { booking, booking2 } from '../../components/Data/Data';
import Movie from "../../assets/images/Slider1.png";
import Bar_code from "../../assets/images/bar_code.png";
import Button from '../../components/Button/Button';
import ThemeContext from '../../theme/ThemeContext';
import Dark_back from "../../assets/images/dark_back.svg";
import { router, Link } from "expo-router";

const Ticket_details = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const back = () => {
        router.push('my_ticket');
      };
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
        <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
            <Text style={[styles.heading, {color:theme.color}]}>Ticket Details</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.card, {backgroundColor: theme.cardbg}]}>
        <View style={styles.movie_details}>
                    <Image source={Movie} alt='image' style={styles.image} />
                    <View style={styles.content}>
                        <Text style={[styles.movie_name, {color:theme.color}]}>Turning Red</Text>
                        <Text style={styles.theater_details}>2 hrs 15mins English IMAX</Text>
                        <Text style={styles.details}>Frank Moses, a retired black-ops CIA agent, enjoys a quiet suburban life, disrupt</Text>
                    </View>
                </View>
                    <Text style={[styles.booking_head, {color: theme.color}]}>Your Booking</Text>
                    <View style={styles.book_container}>
                        {
                            booking.map((d) => (
                                <View style={styles.row} key={d.id}>
                                    <View style={styles.row_left}>
                                        {d.icon}
                                        <Text style={styles.row_text}>{d.heading}</Text>
                                    </View>
                                    <Text style={[styles.value, {color: theme.color}]}>{d.value}</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={[styles.hr, {borderColor:theme.color}]}></View>
                    <Text style={[styles.booking_head, {color: theme.color}]}>Price Details</Text>
                    <View style={styles.book_container}>
                        {
                            booking2.map((d) => (
                                <View style={styles.row} key={d.id}>
                                    <View style={styles.row_left}>
                                        <Text style={styles.row_text}>{d.heading}</Text>
                                    </View>
                                    <Text style={[styles.value, {color:theme.color}]}>{d.value}</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.book_container3}>
                        <View style={styles.row}>                        
                            <Text style={[styles.value, {color:theme.color}]}>Total Price</Text>
                            <Text style={[styles.value, {color:theme.color}]}>$64.50</Text>
                        </View>
                    </View>
                    <View style={styles.image_box}>
                        <Image source={Bar_code} alt='bar_code' style={styles.Bar} />
                    </View>
                </View>
                <View style={styles.button_box}>
                <Button buttonText="Download Ticket PDF" />
                </View>
                </ScrollView>
    </View>
  )
}

export default Ticket_details;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
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
    },
    movie_details: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginTop: 25,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    content: {
        padding: 5,
        maxWidth: 200,
    },
    movie_name: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    theater_details: {
        fontSize: 13,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#757575',
    },
    details: {
        fontSize: 11,
        lineHeight: 18,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    },
    card: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 16,
        marginTop: 33,
        zIndex: 1,
    },
    booking_head: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_700Bold',
        color: '#000000',
        textTransform: 'capitalize',
    },
    book_container: {
        gap: 16,
        marginTop: 16,
        marginBottom: 16,
        },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        
    },
    row_left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    hr: {
        borderBottomColor: '#121212',
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        marginBottom: 24,
    },
    row_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        textTransform: 'capitalize',
    },
    value: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_700Bold',
        color: '#121212',
    },
    book_container3: {

    },
    image_box: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    Bar: {
        width: 280,
        height: 85,
    },
    button_box: {
        paddingTop: 51,
        paddingBottom: 100,
    }
})