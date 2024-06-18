import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native';
import React, {useState, useRef} from 'react';
import Back from "../../assets/images/back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import verify from "../../assets/images/verification.png";
import { Lato_400Regular } from '@expo-google-fonts/lato';
import Button from '../../components/Button/Button';
import { router, Link } from "expo-router";
import Tick from "../../assets/images/Tick.svg";

const Verification = () => {
    const otpInputs = useRef([]);
    const [otp, setOtp] = useState(['', '', '', '']);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const back = () => {
        router.push('create_account');
    };;

    const continues = () => {
        setIsModalVisible(true);
    };

    const handleOtpChange = (index, value) => {
        if (isNaN(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value !== '' && index < otp.length - 1) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleBackspace = (index, event) => {
        if (event.nativeEvent.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index] !== '') {
                newOtp[index] = '';
                setOtp(newOtp);
                return;
            }
            if (index > 0) {
                newOtp[index - 1] = '';
                setOtp(newOtp);
                otpInputs.current[index - 1].focus();
            }
        }
    };

    const login = () => {
        router.push('home');
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={back}>
            <Back />
            </TouchableOpacity>
            <Text style={styles.heading}>Verification</Text>
      </View>
      <View style={styles.image_box}>
      <Image source={verify} alt='image' style={styles.images} />
      </View>
      <Text style={styles.content_heading}>Verification Code</Text>
      <Text style={styles.content_heading2}>We have sent the code verification to </Text>
      <Text style={styles.content_heading3}>minatonami****@gmail.com</Text>
      <View style={styles.otp_block}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        onChangeText={(value) => handleOtpChange(index, value)}
                        onKeyPress={(event) => handleBackspace(index, event)}
                        value={digit}
                        ref={(ref) => otpInputs.current[index] = ref}
                    />
                ))}
            </View>
            <Button buttonText="continue" onPress={continues} />
            <Text style={styles.bottom_text}>Didn’t receive the code?<Link href="/verification" style={styles.link}> Resend</Link></Text>
            <Modal
                transparent={true}
                visible={isModalVisible}
                onRequestClose={() => setIsModalVisible(false)}
            >
                     <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                        <View style={styles.modal_header}>
                                <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                                <Back />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.image_box}>
                                <Tick />
                            </View>
                            <Text style={styles.modal_heading}>Register Success</Text>
                            <Text style={styles.modal_description}>Congratulation your account already created. Please login to get amazing experience.</Text>
                           <Button buttonText="Continue" onPress={login} />
                            </View>
                            </View>

            </Modal> 
    </View>
  )
}

export default Verification;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
    },
    images: {
        width: 130,
        height: 130,
    },
    content_heading: {
        fontSize: 24,
        lineHeight: 34,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textAlign: 'center',
        marginTop: 30,
    },
    content_heading2: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: "#757575",
        textAlign: 'center',
        marginTop: 14,
    },
    content_heading3: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textAlign: 'center',
    },
    otp_block: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        marginTop: 30,
        marginBottom: 140,
    },
    input: {
        borderWidth: 1,
        borderRadius: 15,
        width: 70,
        height: 60,
        textAlign: 'center',
        fontSize: 24,
        lineHeight: 30,
        color: '#000000',
        fontWeight: '700',
        backgroundColor: 'transparent',
        borderColor: '#BABABA',
    },
    bottom_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
        textAlign: 'center',
        marginVertical: 25,
        paddingBottom: 50,
    },
    link: {
        color: '#FF8482',
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
        paddingBottom: 30,
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
    image_box: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textAlign: 'center',
        marginTop: 25,
    },
    modal_description: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        textAlign: 'center',
        color: '#757575',
        marginTop: 16,
        marginBottom: 50,
    }
 
})