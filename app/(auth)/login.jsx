import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import React, { useContext, useState } from 'react';
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import Person from "../../assets/images/person.svg";
import Mail from "../../assets/images/mail.svg";
import Lock from "../../assets/images/lock.svg";
import Open from "../../assets/images/eye.svg";
import Close from "../../assets/images/eye-close.svg";
import Button from '../../components/Button/Button';
import { log_methods } from '../../components/Data/Data';
import { router, Link } from "expo-router";
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import Done from "../../assets/images/done.svg";
import ThemeContext from '../../theme/ThemeContext';


const Login = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [Passwordvisible, setPasswordvisible] = useState(false);
    const togglepasswordvisible = () => {
        setPasswordvisible(!Passwordvisible);
    };

    const [Passwordvisible2, setPasswordvisible2] = useState(false);
    const togglepasswordvisible2 = () => {
        setPasswordvisible2(!Passwordvisible2);
    };
    const [Passwordvisible3, setPasswordvisible3] = useState(false);
    const togglepasswordvisible3 = () => {
        setPasswordvisible3(!Passwordvisible3);
    };

    const togglemodal = () => {
        setIsModalVisible(!isModalVisible);
    };
    
    const togglemodal2 = () => {
        setIsModalVisible2(!isModalVisible2);
    };
    const login = () => {
        router.push('home');
    };
    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <Text style={[styles.heading, { color: theme.color }]}>Login Account</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.head_description}>Login to access your personalized music collection and playlists anytime, anywhere.</Text>
                <View style={styles.input_container}>
                    <View style={styles.input_box}>
                        <Text style={[styles.label, { color: theme.color }]}>Email Or Phone Number</Text>
                        <TextInput style={[styles.input, { backgroundColor: theme.cardbg, color: theme.color }]}
                            placeholder='minatonamikaze@gmail.com'
                        />
                        <View style={styles.icon}>
                            <Mail />
                        </View>
                    </View>
                    <View style={styles.input_box}>
                        <Text style={[styles.label, { color: theme.color }]}>Password</Text>
                        <TextInput style={[styles.password_input, { backgroundColor: theme.cardbg, color: theme.color }]}
                            placeholder='Password'
                            secureTextEntry={!Passwordvisible}
                        />
                        <TouchableOpacity onPress={togglepasswordvisible} style={styles.eye}>
                            {Passwordvisible ? <Open /> : <Close />}
                        </TouchableOpacity>
                        <View style={styles.icon}>
                            <Lock />
                        </View>
                    </View>
                </View>
                <TouchableOpacity style={styles.forget_modal}>
                    <Text style={[styles.forget, { color: theme.bordercolor }]} onPress={togglemodal}>Forgot password</Text>
                </TouchableOpacity>
                <Button buttonText="login" onPress={login} />
                <Text style={styles.or}>Or Using other Method</Text>
                <View style={styles.tab_container}>
                    {
                        log_methods.map((d) => (
                            <TouchableOpacity style={[styles.tab, { backgroundColor: theme.cardbg }]} key={d.id}>
                                {d.image}
                                <Text style={[styles.tab_text, { color: theme.color }]}>{d.text}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
                <Text style={[styles.bottom_text, { color: theme.color }]}>Don’t have an account yet?<Link href='/create_account' style={styles.link} >  Register</Link></Text>
            </ScrollView>
            <Modal transparent={true} visible={isModalVisible} onRequestClose={() => { setIsModalVisible }}>
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
                        <View style={styles.modal_header}>
                            <TouchableOpacity onPress={() => setIsModalVisible(false)}>

                                {darkMode ? <Dark_back /> : <Back />}

                            </TouchableOpacity>
                            <Text style={[styles.modal_heading, {color:theme.color}]}>forget password</Text>
                        </View>
                        <Text style={styles.modal_description}>Enter your email address below and we'll help you reset your password.</Text>

                        <View style={styles.input_box}>
                            <Text style={[styles.label, {color:theme.color}]}>Email Or Phone Number</Text>
                            <TextInput style={[styles.password_input, {backgroundColor: theme.cardbg, color:theme.color}]}
                                placeholder='minatonamikaze@gmail.com'
                            />
                            <View style={styles.icon}>
                                <Mail />
                            </View>
                            <View style={styles.eye}>
                                <Done />
                            </View>
                        </View>
                        <View style={styles.button_box}>
                            <Button buttonText="Continue" onPress={togglemodal2} />
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal transparent={true} visible={isModalVisible2} onRequestClose={() => { setIsModalVisible2 }}>
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { backgroundColor: theme.background }]}>
                        <View style={styles.modal_header}>
                            <TouchableOpacity onPress={() => setIsModalVisible2(false)}>

                                {darkMode ? <Dark_back /> : <Back />}

                            </TouchableOpacity>
                            <Text style={[styles.modal_heading2, {color:theme.color}]}>Create New Password</Text>
                        </View>
                        <Text style={styles.modal_description}>Ensure your account's security with a strong, unique password.</Text>

                        <View style={styles.input_box}>
                        <Text style={[styles.label, { color: theme.color }]}>Password</Text>
                        <TextInput style={[styles.password_input, { backgroundColor: theme.cardbg, color: theme.color }]}
                            placeholder='Password'
                            secureTextEntry={!Passwordvisible2}
                        />
                        <TouchableOpacity onPress={togglepasswordvisible2} style={styles.eye}>
                            {Passwordvisible2 ? <Open /> : <Close />}
                        </TouchableOpacity>
                        <View style={styles.icon}>
                            <Lock />
                        </View>
                    </View>

                    <View style={styles.input_box}>
                        <Text style={[styles.label, { color: theme.color }]}>Password</Text>
                        <TextInput style={[styles.password_input, { backgroundColor: theme.cardbg, color: theme.color }]}
                            placeholder='Password'
                            secureTextEntry={!Passwordvisible3}
                        />
                        <TouchableOpacity onPress={togglepasswordvisible3} style={styles.eye}>
                            {Passwordvisible3 ? <Open /> : <Close />}
                        </TouchableOpacity>
                        <View style={styles.icon}>
                            <Lock />
                        </View>
                    </View>
                        <View style={styles.button_box}>
                            <Button buttonText="Continue" onPress={login} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    head_description: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginTop: 7,
    },
    input_container: {
        gap: 16,
        marginTop: 26,
        marginBottom: 10,
    },
    input_box: {
        gap: 10,
    },
    label: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat_600SemiBold',
        color: '#121212',
        textTransform: 'capitalize',
    },
    input: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        position: 'relative',
        paddingLeft: 40,
        paddingRight: 20,
    },
    icon: {
        position: 'absolute',
        bottom: 18,
        left: 10,
    },
    password_input: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 10,
        position: 'relative',
        paddingLeft: 40,
        paddingRight: 50,
    },
    eye: {
        position: 'absolute',
        right: 10,
        bottom: 18,
    },
    forget_modal: {
        marginBottom: 24,
    },
    forget: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#1C31A5',
        textAlign: 'right',
    },
    or: {
        textAlign: 'center',
        marginVertical: 28,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
    },
    tab_container: {
        gap: 20,
    },
    tab: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        borderWidth: 1,
        borderColor: '#757575',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: 'transparent',
    },
    tab_text: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Lato_400Regular',
        color: '#121212',
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
    modal_heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    modal_heading2: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    modal_description: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginTop: 16,
        marginBottom: 50,
    },
    button_box: {
        marginVertical: 30,
    }
})