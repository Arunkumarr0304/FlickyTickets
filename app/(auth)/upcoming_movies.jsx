import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, {useContext, useState} from 'react';
import Back from "../../assets/images/back.svg";
import Dark_back from "../../assets/images/dark_back.svg";
import { Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { language, recommend_data, upcoming_data } from '../../components/Data/Data';
import { Lato_700Bold } from '@expo-google-fonts/lato';
import Imdb from "../../assets/images/imdb.svg";
import { router, Link } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Upcoming_movies = () => {
    const { theme, darkMode, toggleTheme } = useContext(ThemeContext);
    const [activetab, setActivetab] = useState(language[0].id);

    const tabbing = (id) => {
        setActivetab(id);
    };
    const details = () => {
        router.push('movie_details');
      };
      const back = () => {
        router.push('home');
      };
  return (
    <View style={[styles.container, {backgroundColor:theme.background}]}>
        <View style={styles.header}>
        <TouchableOpacity onPress={back}>
       {darkMode? <Dark_back /> :  <Back />}
       </TouchableOpacity>
            <Text style={[styles.heading, {color: theme.color}]}>Upcoming Movies</Text>
        </View>
        <ScrollView horizontal={true} style={styles.tab_container}>
            {
                language.map((d) => (
                    <TouchableOpacity style={[[styles.tab, {borderColor:theme.bordercolor}], activetab === d.id && [styles.activetab, {borderColor: theme.bordercolor, backgroundColor:theme.bordercolor}]  ]} key={d.id} onPress={() => tabbing(d.id)}>
                        <Text style={[[styles.tab_text, {color: theme.bordercolor}], activetab === d.id && styles.active_text]}>{d.text}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
        
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.recommend_container}>
        {
          upcoming_data.map((d) => (
            <TouchableOpacity style={styles.recommend_box} key={d.id} onPress={details}>
              <Image source={d.image} alt='image' style={styles.rec_image} />
              <View style={styles.content}>
                <Text style={[styles.rec_movie_name, {color: theme.color}]}>{d.name}</Text>
                <View style={styles.rec_content_right}>
                <Imdb />
                <Text style={[styles.rating, {color: theme.color}]}>{d.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>
      </ScrollView>
    </View>
  )
}

export default Upcoming_movies;

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
    tab_container: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    tab: {
        borderColor: '#1C31A5',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 7,
        paddingHorizontal: 16,
        marginRight: 10,
    },
    activetab: {
        backgroundColor: '#1C31A5',
    },
    tab_text: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Lato_700Bold',
        color: '#1C31A5',
        textTransform: 'capitalize',
    },
    active_text: {
        color: '#ffffff',
    },
    recommend_container: {
        marginTop: 24,
        marginBottom: 160,
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        },
        recommend_box: {
        
        },
        rec_image: {
          width: 140,
          height: 200,
          borderRadius: 10,
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
        rec_content_right: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 5,
        },
        rating: {
          fontSize: 10,
          lineHeight: 12,
          fontFamily: 'Lato_400Regular',
          color: '#121212',
        },
})