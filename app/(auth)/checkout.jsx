import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import React, { useContext, useState } from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import Movie from "../../assets/images/Slider1.png";
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { booking, booking2, modal_data } from '../../components/Data/Data';
import Coupon from "../../assets/images/coupon.svg";
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import Done from "../../assets/images/done.svg";
import ThemeContext from '../../theme/ThemeContext';

const Checkout = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [coupon, setCoupon] = useState(modal_data[1].id);

    const pay = () => {
        router.push('payment');
    };

    const selectCoupon = (id) => {
        setCoupon(id); 
    };
    const back = () => {
        router.push('seat');
      };
    
    return (
        <View style={[styles.container, {backgroundColor: theme.background}]}>
            <View style={styles.header}>
            <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
                <Text style={[styles.heading, {color: theme.color}]}>Checkout</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.movie_details}>
                    <Image source={Movie} alt='image' style={styles.image} />
                    <View style={styles.content}>
                        <Text style={[styles.movie_name, {color: theme.color}]}>Turning Red</Text>
                        <Text style={styles.theater_details}>2 hrs 15mins English IMAX</Text>
                        <Text style={styles.details}>Frank Moses, a retired black-ops CIA agent, enjoys a quiet suburban life, disrupt</Text>
                    </View>
                </View>
                <View style={[styles.card, {backgroundColor: theme.cardbg}]}>
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
                    <View style={styles.hr}></View>
                    <Text style={[styles.booking_head, {color: theme.color}]}>Price Details</Text>
                    <View style={styles.book_container}>
                        {
                            booking2.map((d) => (
                                <View style={styles.row} key={d.id}>
                                    <View style={styles.row_left}>
                                        <Text style={styles.row_text}>{d.heading}</Text>
                                    </View>
                                    <Text style={[styles.value, {color: theme.color}]}>{d.value}</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.book_container3}>
                        <View style={styles.row}>                        
                            <Text style={[styles.value, {color: theme.color}]}>Total Price</Text>
                            <Text style={[styles.value, {color:theme.color}]}>$64.50</Text>
                        </View>
                    </View>
                </View>
                <Text style={[styles.coupon_head, {color: theme.color}]} >
                    Select Promo Code
                </Text>
                <TouchableOpacity style={styles.input_box} onPress={() => setIsModalVisible(true)} >
                    <TextInput style={[styles.input, {backgroundColor: theme.cardbg, color: theme.color}]} 
                        placeholder='Select Promo Code'
                        editable={false} 
                    />
                    <View style={styles.image_box}>
                        <Coupon />
                    </View>
                </TouchableOpacity>
                <View style={styles.button_box}>
                    <Button buttonText="Pay Now" onPress={pay} />
                </View>
                <Modal
                    transparent={true}
                    visible={isModalVisible}
                    onRequestClose={() => setIsModalVisible(false)}
                >
                    <View style={styles.modalOverlay}>
                        <View style={[styles.modalContent, {backgroundColor: theme.background}]}>
                            <View style={styles.modal_header}>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                  { darkMode? <Dark_back /> : <Back />}
                                </TouchableOpacity>
                                <Text style={[styles.heading, {color: theme.color}]}>My Coupon</Text>
                            </View>
                            <View style={styles.stack_container}>
                                {
                                    modal_data.map((d) => (
                                        <TouchableOpacity style={[styles.stack, coupon === d.id && styles.activestack, {backgroundColor: theme.cardbg}]} key={d.id} onPress={ () => (selectCoupon(d.id))}>
                                            <Coupon />
                                            <View style={styles.stack_content}>
                                                <Text style={[styles.discount, {color: theme.color}]}>{d.percentage}</Text>
                                                <Text style={[styles.expired, {color: theme.color}]}>{d.expired}<Text style={styles.see_details}>see details</Text></Text>
                                            </View>
                                            <View style={styles.done_box}>
                                                {coupon === d.id ? <Done /> : <></> }
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                            <Button buttonText="Use Coupon" onPress={() => setIsModalVisible(false)} />
                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    );
};

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
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContent: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 50,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    
    modal_header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: 25,
    },
    stack_container: {
        gap: 16,
        marginBottom: 30,
    },
    stack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 10,
    },
    activestack: {
        borderWidth: 1,
        borderColor: '#FF6F6C',
    }
})