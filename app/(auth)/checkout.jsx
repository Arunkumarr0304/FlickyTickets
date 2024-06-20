import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Movie from "../../assets/images/Slider1.png";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { booking, booking2 } from '../../components/Data/Data';
import Coupon from "../../assets/images/coupon.svg";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";

const Checkout = () => {
const pay = () => {
    router.push('payment');
};
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Back />
            <Text style={styles.heading}>Checkout</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.movie_details}>
            <Image source={Movie} alt='image' style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.movie_name}>Truning Red</Text>
                <Text style={styles.theater_details}>2 hrs 15mins English IMAX</Text>
                <Text style={styles.details}>Frank Moses, a retired black-ops CIA agent, enjoys a quiet suburban life, disrupt</Text>
            </View>
        </View>
        <View style={styles.card}>
            <Text style={styles.booking_head}>Your Booking</Text>
            <View style={styles.book_container}>
                {
                    booking.map((d) => (
                        <View style={styles.row} key={d.id}>
                            <View style={styles.row_left}>
                            {d.icon}
                            <Text style={styles.row_text}>{d.heading}</Text>
                            </View>
                            <Text style={styles.value}>{d.value}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={styles.hr}></View>
            <Text style={styles.booking_head}>Price Details</Text>
            <View style={styles.book_container}>
                {
                    booking2.map((d) => (
                        <View style={styles.row} key={d.id}>
                            <View style={styles.row_left}>
                            <Text style={styles.row_text}>{d.heading}</Text>
                            </View>
                            <Text style={styles.value}>{d.value}</Text>
                        </View>
                    ))
                }
            </View>
            <View style={styles.book_container3}>
            <View style={styles.row}>                        
                            <Text style={styles.value}>Total Price</Text>
                            <Text style={styles.value}>$64.50</Text>
                        </View>
            </View>
        </View>
        <Text style={styles.coupon_head}>
        Select Promo Code
        </Text>
        <View style={styles.input_box}>
        <TextInput style={styles.input} />
        <View style={styles.image_box}>
            <Coupon />
        </View>
        </View>
        <View style={styles.button_box}>
        <Button buttonText="Pay Now" onPress={pay} />
        </View>
        </ScrollView>
    </View>
  )
}

export default Checkout;

const styles = StyleSheet.create({
    container : {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 30,
        paddingBottom: 5,
    },
    heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
    },
    movie_details: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginTop: 25,
    },
    image: {
        width: 120,
        height: 120,
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
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#757575',
    },
    details: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    },
    card: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        padding: 16,
        marginTop: 33,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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
    coupon_head: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#121212',
        textTransform: 'capitalize',
        marginTop: 20,
        marginBottom: 10,
    },
    input_box: {

    },
    input: {
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 40,
        position: 'relative',
    },
    image_box: {
        position: 'absolute',
        bottom: 18,
        left: 10,
    },
    button_box: {
        marginTop: 25,
        marginBottom: 88,
    }
})