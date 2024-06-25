import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, {useContext, useState} from 'react';
import { Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import Person from "../../assets/images/person.svg";
import Mail from "../../assets/images/mail.svg";
import Lock from "../../assets/images/lock.svg";
import Open from "../../assets/images/eye.svg";
import Close from "../../assets/images/eye-close.svg";
import Button from '../../components/Button/Button';
import { log_methods } from '../../components/Data/Data';
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Create_account = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [Passwordvisible, setPasswordvisible] = useState(false);
    const togglepasswordvisible = () => {
        setPasswordvisible(!Passwordvisible);
    };
    const verify = () => {
        router.push('verification');
    };
  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.heading, {color:theme.color}]}>create account</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
      <Text style={styles.description}>Create your account to unlock a personalized music experience tailored to your taste.</Text>
        <View style={styles.input_container}>
            <View style={styles.input_box}>
                <Text style={[styles.label, {color: theme.color}]}>Username</Text>
                <TextInput style={[styles.input, {backgroundColor: theme.cardbg, color: theme.color}]} 
                placeholder='Minato Namikaze'
                />
                <View style={styles.icon}>
                    <Person />
                </View>
            </View>
            <View style={styles.input_box}>
                <Text style={[styles.label, {color:theme.color}]}>Email Or Phone Number</Text>
                <TextInput style={[styles.input, {backgroundColor: theme.cardbg, color: theme.color}]} 
                placeholder='minatonamikaze@gmail.com'
                />
                <View style={styles.icon}>
                    <Mail />
                </View>
            </View>
            <View style={styles.input_box}>
                <Text style={[styles.label, {color:theme.color}]}>Password</Text>
                <TextInput style={[styles.password_input, {backgroundColor: theme.cardbg, color: theme.color}]} 
                placeholder='Password'
                secureTextEntry = {!Passwordvisible}
                />
                <TouchableOpacity onPress={togglepasswordvisible} style={styles.eye}>
                {Passwordvisible ? <Open /> : <Close />}
                </TouchableOpacity>
                <View style={styles.icon}>
                    <Lock />
                </View>
            </View>
        </View>
        <Button buttonText="Create Account" onPress={verify} />
        <Text style={styles.or}>Or Using other Method</Text>
        <View style={styles.tab_container}>
            {
                log_methods.map((d) => (
                    <TouchableOpacity style={[styles.tab, {backgroundColor: theme.cardbg}]} key={d.id}>
                        {d.image}
                        <Text style={[styles.tab_text, {color: theme.color}]}>{d.text}</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
        <Text style={[styles.bottom_text, {color:theme.color}]}>Already have an account?<Link href='/login' style={styles.link} > Login</Link></Text>
        </ScrollView>
    </View>
  )
}

export default Create_account;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 20, 
        backgroundColor: '#ffffff',
        flex: 1,
    },
    heading: {
        fontSize: 26,
        lineHeight: 36,
        fontFamily: 'Montserrat_700Bold',
        color: '#121212',
        textTransform: 'capitalize',
        paddingTop: 10,
    },
    scroll: {
    
    },
    description: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_400Regular',
        color: '#757575',
        marginTop: 17,
        marginBottom: 25,
    },
    input_container: {
        gap: 16,
        marginBottom: 26,
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
        color: '#FF95AE',
    }
})